import React, {DragEvent, useCallback, useEffect, useRef, useState} from 'react';
import ReactFlow, { addEdge, Controls, OnConnect, ReactFlowInstance, Position, Background, BackgroundVariant, useViewport } from 'reactflow';
import { nanoid } from "@reduxjs/toolkit";
import 'reactflow/dist/style.css';

import useDebounce from "../../hooks/use-debounce";
import { REACT_FLOW_APP } from "../../constants/react-flow-board";
import { makeUseActions } from "../../hooks/use-actions";
import { NodeTemplateTypes } from "../../redux/node-templates/node-templates-types";
import { selectEdges, selectNodes, selectViewport} from "../../redux/board/board-selectors";
import { makeUseStructuredSelector } from "../../hooks/make-use-structured-selector";
import { selectNodeTemplatesMap, selectNodeTypes } from "../../redux/node-templates/node-templates-selectors";
import { addNode, changeEdges, changeNodes, setEdges, setViewport } from "../../redux/board/board-reducer";

import TextNode from "../../components/nodes/text-node/text-node";
import InputNode from "../../components/nodes/input-node/input-node";
import OutputNode from "../../components/nodes/output-node/output-node";
import ColorSelectorNode from "../../components/nodes/color-selector-node/color-selector-node";

import './board.scss';
import 'reactflow/dist/style.css';

const useBoardPageSelectors = makeUseStructuredSelector({
  nodes: selectNodes,
  edges: selectEdges,
  nodeTypes: selectNodeTypes,
  nodeTemplatesMap: selectNodeTemplatesMap,
  viewport: selectViewport,
});

const useBoardActions = makeUseActions({
  onAddNode: addNode,
  onSetEdges: setEdges,
  onChangeNodes: changeNodes,
  onChangeEdges: changeEdges,
  onSetViewport: setViewport,
});

const nodeTypes = {
  [NodeTemplateTypes.input]: InputNode,
  [NodeTemplateTypes.output]: OutputNode,
  [NodeTemplateTypes.textNode]: TextNode,
  [NodeTemplateTypes.selectorNode]: ColorSelectorNode,
};

const BoardPage = () => {
  const { nodes, edges, viewport, nodeTemplatesMap } = useBoardPageSelectors();
  const { onAddNode, onSetEdges, onChangeNodes, onChangeEdges, onSetViewport } = useBoardActions();

  const viewportData = useViewport();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<any, any> | null>(null);

  const viewportX = useDebounce(viewportData.x);
  const viewportY = useDebounce(viewportData.y);
  const viewportZoom = useDebounce(viewportData.zoom);

  useEffect(() => {
    onSetViewport({ x: viewportX, y: viewportY, zoom: viewportZoom });
  }, [viewportX, viewportY, viewportZoom, onSetViewport]);

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
        defaultViewport={viewport}
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
