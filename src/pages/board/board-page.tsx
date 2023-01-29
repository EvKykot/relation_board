import React, { DragEvent, useCallback, useRef, useState } from 'react';
import { nanoid } from "@reduxjs/toolkit";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  OnConnect,
  OnNodesChange,
  OnEdgesChange,
  ReactFlowInstance,
  EdgeChange,
  Position,
  Dimensions,
  Background,
  BackgroundVariant,
  Node,
} from 'reactflow';
import 'reactflow/dist/style.css';

import {selectNodeTemplatesMap, selectNodeTypes} from "../../redux/node-templates/node-templates-selectors";
import { makeUseStructuredSelector } from "../../hooks/make-use-structured-selector";
import { selectEdges, selectNodes } from "../../redux/board/board-selectors";
import { REACT_FLOW_APP } from "../../constants/react-flow-board";
import { makeUseActions } from "../../hooks/use-actions";
import {addNode, changeEdges, changeNodes, setEdges} from "../../redux/board/board-reducer";

import ColorSelectorNode from "../../components/nodes/color-selector-node/color-selector-node";
import InputNode from "../../components/nodes/input-node/input-node";
import OutputNode from "../../components/nodes/output-node/output-node";

import './board.scss';
import 'reactflow/dist/style.css';
import {NodeTemplateTypes} from "../../redux/node-templates/node-templates-types";
import TextNode from "../../components/nodes/text-node/text-node";

const useBoardPageSelectors = makeUseStructuredSelector({
  nodes: selectNodes,
  edges: selectEdges,
  nodeTemplatesMap: selectNodeTemplatesMap,
  nodeTypes: selectNodeTypes,
});

const useBoardActions = makeUseActions({
  onAddNode: addNode,
  onSetEdges: setEdges,
  onChangeNodes: changeNodes,
  onChangeEdges: changeEdges,
});

const nodeTypes = {
  [NodeTemplateTypes.input]: InputNode,
  [NodeTemplateTypes.output]: OutputNode,
  [NodeTemplateTypes.selectorNode]: ColorSelectorNode,
  [NodeTemplateTypes.textNode]: TextNode,
  // input: InputNode,
  // output: OutputNode,
  // selectorNode: ColorSelectorNode,
  // textNode: TextNode,
};

const BoardPage = () => {
  const { nodes, edges, nodeTemplatesMap } = useBoardPageSelectors();
  const { onAddNode, onSetEdges, onChangeNodes, onChangeEdges } = useBoardActions();

  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<any, any> | null>(null);

  const onConnect: OnConnect = useCallback((params) => (
    onSetEdges(addEdge(params, edges))
  ), [edges, onSetEdges]);

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!reactFlowWrapper.current || !reactFlowInstance) return;

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const nodeTemplateId = event.dataTransfer.getData(REACT_FLOW_APP);
    const nodeTemplate = nodeTemplatesMap[nodeTemplateId];

    if (!nodeTemplate) return;

    const { label, type, ...restTemplateProps } = nodeTemplate;
    const xPosition = event.clientX - reactFlowBounds.left;
    const yPosition = event.clientY - reactFlowBounds.top;

    const position = reactFlowInstance.project({ x: xPosition, y: yPosition });
    const newNode = {
      ...restTemplateProps,
      id: nanoid(),
      position,
      data: { label },
      type: `${type}`,
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };

    onAddNode(newNode);
  }, [reactFlowInstance, nodeTemplatesMap]);

  return (
    <div className="board" ref={reactFlowWrapper}>
      <ReactFlow
        fitView
        snapToGrid
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onDrop={onDrop}
        onConnect={onConnect}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        onNodesChange={onChangeNodes}
        onEdgesChange={onChangeEdges}
      >
        <Controls />
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
}

export default BoardPage;
