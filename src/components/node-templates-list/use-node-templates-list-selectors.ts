import { createSelector } from "@reduxjs/toolkit";

import { NodeTemplateType } from "../../redux/node-templates/node-templates-types";
import { makeUseStructuredSelector } from "../../hooks/make-use-structured-selector";
import { selectNodeTemplatesMap, selectSideSections } from "../../redux/node-templates/node-templates-selectors";

const useNodeTemplatesListSelectors = makeUseStructuredSelector({
  sectionsData: createSelector(
    selectSideSections,
    selectNodeTemplatesMap,
    (sideSections, nodesMap) => (
      sideSections.map((section) => {
        const { nodesIds } = section;
        const sectionNodes = nodesIds.reduce((acc: NodeTemplateType[], nodeId) => {
          const node = nodesMap[nodeId];
          return node ? [...acc, node] : acc;
        }, [] as NodeTemplateType[]);

        return { ...section, nodes: sectionNodes };
      })
    )
  )
});

export default useNodeTemplatesListSelectors;
