import React from 'react';
import ReactFlow, { Controls, Background, BackgroundVariant } from 'reactflow';

import { useBoardPage } from "./use-board-page";
import { NodeTemplateTypes } from "../../redux/node-templates/node-templates-types";

import InputNode from "../../components/nodes/input-node/input-node";
import OutputNode from "../../components/nodes/output-node/output-node";
import TextNode from "../../components/nodes/text-node/text-node";
import ColorSelectorNode from "../../components/nodes/color-selector-node/color-selector-node";

import 'reactflow/dist/style.css';
import './board.scss';

const nodeTypes = {
  [NodeTemplateTypes.input]: InputNode,
  [NodeTemplateTypes.output]: OutputNode,
  [NodeTemplateTypes.textNode]: TextNode,
  [NodeTemplateTypes.selectorNode]: ColorSelectorNode,
};

const BoardPage = () => {
  const {
    reactFlowWrapper,
    nodes,
    edges,
    viewport,
    onDrop,
    onConnect,
    onDragOver,
    setReactFlowInstance,
    onChangeNodes,
    onChangeEdges,
  } = useBoardPage();

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
