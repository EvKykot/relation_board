import { createSelector } from "@reduxjs/toolkit";

import { NodeTemplateType } from "../../redux/node-templates/node-templates-types";
import { makeUseStructuredSelector } from "../../hooks/make-use-structured-selector";
import { selectNodeTemplatesMap, selectSideSections } from "../../redux/node-templates/node-templates-selectors";

export type SectionsOption = {
  sectionsId: string;
  nodeId: string;
  value: string;
}

const getSectionsData = createSelector(
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
);

const getAutocompleteOptions = createSelector(
  getSectionsData,
  (sectionsData) => (
    sectionsData.reduce((acc: SectionsOption[], section) => {
      const { id: sectionsId, nodes } = section;
      const sectionOptions = nodes.map((node) => ({ sectionsId, nodeId: node.id, value: node.label }));
      return [...acc, ...sectionOptions ];
    }, [])
  )
);

const useNodeTemplatesListSelectors = makeUseStructuredSelector({
  sectionsData: getSectionsData,
  autocompleteOptions: getAutocompleteOptions,
});

export default useNodeTemplatesListSelectors;
