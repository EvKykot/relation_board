import { keyBy, uniqBy } from 'lodash';
import { createSelector } from "@reduxjs/toolkit";

import { NodeTemplateType } from "./node-templates-types";
import { RootState } from "../../boot/store";

export const selectNodesSlice = (state: RootState) => state.nodeTemplates;
export const selectNodeTemplates = createSelector(selectNodesSlice, (slice) => slice.nodeTemplates);
export const selectSideSections = createSelector(selectNodesSlice, (slice) => slice.sideSections);

export const selectNodeTemplatesMap = createSelector(selectNodeTemplates, (nodes) => keyBy(nodes, 'id'));
export const selectNodeTypes = createSelector(selectNodeTemplates, (nodes) => uniqBy(nodes, 'type'));
export const getSideSectionsData = createSelector(
  selectSideSections,
  selectNodeTemplatesMap,
  (sideSections, nodeTemplatesMap) => (
    sideSections.map((section) => {
      const { nodesIds } = section;
      const sectionNodes = nodesIds.reduce((acc: NodeTemplateType[], nodeId) => {
        const nodeTemplate = nodeTemplatesMap[nodeId];
        return nodeTemplate ? [...acc, nodeTemplate] : acc;
      }, [] as NodeTemplateType[]);

      return { ...section, nodes: sectionNodes };
    })
  )
);
