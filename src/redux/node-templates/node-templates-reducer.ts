import { createSlice } from "@reduxjs/toolkit";
import { NodesState } from "./node-templates-types";

import { initialNodes, initialSideSections } from "./node-templates-constants";

const initialState: NodesState = {
  nodeTemplates: initialNodes,
  sideSections: initialSideSections,
};

export const nodesSlice = createSlice({
  name: 'nodeTemplates',
  initialState,
  reducers: {
    addSection: (state) => {
      //
    },
    deleteSection: (state) => {
      //
    },
    addNodeTemplate: (state) => {
      //
    },
    deleteNodeTemplate: (state) => {
      //
    },
  }
});

export const {
  addSection,
  deleteSection,
  addNodeTemplate,
  deleteNodeTemplate,
} = nodesSlice.actions;

export default nodesSlice.reducer;
