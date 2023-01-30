import { DragEvent, useCallback, useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { addEdge, OnConnect, Position, ReactFlowInstance, useViewport } from "reactflow";

import useDebounce from "../../hooks/use-debounce";
import { makeUseActions } from "../../hooks/use-actions";
import { REACT_FLOW_APP } from "../../constants/react-flow-board";
import { makeUseStructuredSelector } from "../../hooks/make-use-structured-selector";
import { selectNodeTemplatesMap, selectNodeTypes } from "../../redux/node-templates/node-templates-selectors";
import { selectEdges, selectNodes, selectViewport } from "../../redux/board/board-selectors";
import { addNode, changeEdges, changeNodes, setEdges, setViewport } from "../../redux/board/board-reducer";

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

export const useBoardPage = () => {
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

  return {
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
  };
};
