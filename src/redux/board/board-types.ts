import { Edge, Node, Viewport } from "reactflow";

export type NodeData = {
  label: string;
}

export type BoardFlow = {
  nodes: Node[];
  edges: Edge[];
  viewport: Viewport;
}

export interface BoardState {
  nodes: Node[];
  edges: Edge[];
  viewport: Viewport;
}
