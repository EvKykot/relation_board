import { nanoid } from "@reduxjs/toolkit";
import { NodeTemplateTypes } from "./node-templates-types";

export const closureNodes = [
  { id: nanoid(), label: 'Input node', type: NodeTemplateTypes.input, style: {stroke: 'red'} },
  { id: nanoid(), label: 'Output node', type: NodeTemplateTypes.output, style: {stroke: 'green'} },
];

export const baseNodes = [
  { id: nanoid(), label: 'Default node' },
];

export const customNodes = [
  { id: nanoid(), label: 'Text node', type: NodeTemplateTypes.textNode },
  { id: nanoid(), label: 'Color picker node', type: NodeTemplateTypes.selectorNode },
];

export const initialNodes = [ ...closureNodes, ...baseNodes, ...customNodes ];

export const initialSideSections = [
  { id: nanoid(), label: 'Closure nodes', nodesIds: closureNodes.map((item) => item.id) },
  { id: nanoid(), label: 'Default nodes', nodesIds: baseNodes.map((item) => item.id) },
  { id: nanoid(), label: 'Custom nodes', nodesIds: customNodes.map((item) => item.id) },
];
