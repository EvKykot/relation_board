import { keyBy } from 'lodash';
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../boot/store";

export const selectBoardSlice = (state: RootState) => state.board;
export const selectNodes = createSelector(selectBoardSlice, (slice) => slice.nodes);
export const selectEdges = createSelector(selectBoardSlice, (slice) => slice.edges);
export const selectViewport = createSelector(selectBoardSlice, (slice) => slice.viewport);

export const selectNodesMap = createSelector(selectNodes, (nodes) => keyBy(nodes, 'id'));
export const selectBoardFlow = createSelector(
  selectNodes,
  selectEdges,
  selectViewport,
  (nodes, edges, viewport) => ({ nodes, edges, viewport })
);

// TODO: TBD
export const selectHandleMap = createSelector(
  selectEdges,
  (edges) => (
    edges.reduce((acc: { sourceMap: Record<string, number>; targetMap: Record<string, number> }, edge) => {
      const { sourceMap, targetMap } = acc;
      const { source, target } = edge;

      if (source) acc.sourceMap[source] = sourceMap[source] ? sourceMap[source] + 1 : 1;
      if (target) acc.targetMap[target] = targetMap[target] ? targetMap[target] + 1 : 1;

      return acc;
    }, {
      sourceMap: {},
      targetMap: {},
    })
  )
);
