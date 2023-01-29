import { Edge, Node } from "reactflow";

export type NodeData = {
  label: string;
}

export interface BoardState {
  nodes: Node[];
  edges: Edge[];
}
