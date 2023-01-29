import { createSlice, nanoid } from "@reduxjs/toolkit";
import {NodesState, NodeTemplateTypes} from "./node-templates-types";

const closureNodes = [
  { id: nanoid(), label: 'Input node', type: NodeTemplateTypes.input, style: { stroke: 'red' } },
  { id: nanoid(), label: 'Output node', type: NodeTemplateTypes.output, style: { stroke: 'green' } },
];

const baseNodes = [
  { id: nanoid(), label: 'Default node' },
];

const customNodes = [
  { id: nanoid(), label: 'Color picker node', type: NodeTemplateTypes.selectorNode },
  { id: nanoid(), label: 'Text node', type: NodeTemplateTypes.textNode },
];

const initialNodes = [...closureNodes, ...baseNodes, ...customNodes];

const initialSideSections = [
  { id: nanoid(), label: 'Closure nodes', nodesIds: closureNodes.map((item) => item.id) },
  { id: nanoid(), label: 'Default nodes', nodesIds: baseNodes.map((item) => item.id) },
  { id: nanoid(), label: 'Custom nodes', nodesIds: customNodes.map((item) => item.id) },
];

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
