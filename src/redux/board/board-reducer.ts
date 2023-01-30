import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Edge, EdgeChange, Node, NodeChange, Viewport } from "reactflow";
import { keyBy } from "lodash";

import { NodeTemplateTypes } from "../node-templates/node-templates-types";
import { getInitialState } from "./board-utils";
import { DEFAULT_BOARD_STATE } from "./board-constants";

export const boardSlice = createSlice({
  name: 'board',
  initialState: getInitialState(),
  reducers: {
    addNode: (state, action: PayloadAction<Node>) => {
      state.nodes = [...state.nodes, action.payload];
    },
    changeNodes: (state, action: PayloadAction<NodeChange[]>) => {
      const nodeChangesMap = keyBy(action.payload, 'id');
      state.nodes = state.nodes.reduce((acc: Node[], node) => {
        const nodeChanges = nodeChangesMap[node.id];
        const isNodeRemoved = nodeChanges?.type === NodeTemplateTypes.remove;
        if (!nodeChanges) return [...acc, node];
        if (isNodeRemoved) return acc;
        return [...acc, { ...node, ...nodeChanges, type: node.type }];
      }, []);
    },
    updateNodeData: (state, action: PayloadAction<{ id: string; data: Record<string, unknown> }>) => {
      const { id, data } = action.payload;
      state.nodes = state.nodes.map((node) => {
        if (node.id !== id) return node;
        return { ...node, data: { ...node.data, ...data } };
      });
    },
    setEdges: (state, action: PayloadAction<Edge[]>) => {
      state.edges = action.payload;
    },
    changeEdges: (state, action: PayloadAction<EdgeChange[]>) => {
      const edgeChangesMap = keyBy(action.payload, 'id');
      state.edges = state.edges.reduce((acc: Edge[], edge) => {
        const edgeChanges = edgeChangesMap[edge.id];
        const isEdgeRemoved = edgeChanges?.type === NodeTemplateTypes.remove;
        if (!edgeChanges) return [...acc, edge];
        if (isEdgeRemoved) return acc;
        return [...acc, { ...edge, ...edgeChanges, type: edge.type }];
      }, []);
    },
    setViewport: (state, action: PayloadAction<Viewport>) => {
      state.viewport = action.payload;
    },
    clearBoard: () => ({ ...DEFAULT_BOARD_STATE }),
  }
});

export const {
  addNode,
  changeNodes,
  updateNodeData,
  setEdges,
  changeEdges,
  setViewport,
  clearBoard
} = boardSlice.actions;

export default boardSlice.reducer;
