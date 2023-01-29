export enum NodeTemplateTypes {
  input = 'input',
  output = 'output',
  default = 'default',
  remove = 'remove',
  selectorNode = 'selectorNode',
  textNode = 'textNode',
}

export type NodeTemplateType = {
  id: string;
  label: string;
  type?: NodeTemplateTypes;
}

export type SideSection = {
  id: string;
  label: string;
  nodesIds: string[];
}

export interface NodesState {
  nodeTemplates: NodeTemplateType[];
  sideSections: SideSection[];
}
