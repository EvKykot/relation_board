import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node, Edge, EdgeChange, NodeChange } from "reactflow";
import { keyBy } from "lodash";

import { BoardState } from "./board-types";
import { NodeTemplateTypes } from "../node-templates/node-templates-types";

const initialState: BoardState = {
  nodes: [],
  edges: [],
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
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
      state.edges = state.edges.map((edge) => {
        const edgeChanges = edgeChangesMap[edge.id];
        return !edgeChanges ? edge : { ...edge, ...edgeChanges };
      });
    },
  }
});

export const {
  addNode,
  changeNodes,
  updateNodeData,
  setEdges,
  changeEdges
} = boardSlice.actions;

export default boardSlice.reducer;
