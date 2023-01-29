import { keyBy, uniqBy } from 'lodash';
import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../boot/store";

export const selectNodesSlice = (state: RootState) => state.nodeTemplates;
export const selectNodeTemplates = createSelector(selectNodesSlice, (slice) => slice.nodeTemplates);
export const selectSideSections = createSelector(selectNodesSlice, (slice) => slice.sideSections);

export const selectNodeTemplatesMap = createSelector(selectNodeTemplates, (nodes) => keyBy(nodes, 'id'));
export const selectNodeTypes = createSelector(selectNodeTemplates, (nodes) => uniqBy(nodes, 'type'));
