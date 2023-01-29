import React, { useState, DragEvent } from "react";
import { FilterFunc } from "rc-select/lib/Select";
import { Menu, AutoComplete } from "antd";

import { REACT_FLOW_APP } from "../../constants/react-flow-board";
import useNodeTemplatesListSelectors, { SectionsOption } from "./use-node-templates-list-selectors";
import NodeTemplate from "../node-template/node-template";

import './node-templates-list.scss';

const NodeTemplatesList = () => {
  const { sectionsData, autocompleteOptions } = useNodeTemplatesListSelectors();

  const defaultOpenKeys = sectionsData.map(({ id }) => (id));

  const [selectedKey, setSelectedKey] = useState<string>('');
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys);

  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeTemplateId: string) => {
    event.dataTransfer.setData(REACT_FLOW_APP, nodeTemplateId);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onFilterOptions: FilterFunc<SectionsOption> = (inputValue, option) => (
    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
  );

  const onSelectNode = (searchValue: string, option: SectionsOption) => {
    setSelectedKey(option.nodeId);
    setOpenKeys([option.sectionsId]);
  }

  return (
    <>
      <AutoComplete
        className="autocomplete-search"
        options={autocompleteOptions}
        placeholder="Type some node label"
        filterOption={onFilterOptions}
        onSelect={onSelectNode}
      />
      <Menu
        mode="inline"
        theme="dark"
        className="base-layout-nav-menu"
        style={{ height: 'calc(100% - 150px)' }}
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
      >
        {sectionsData.map(({ id: sectionKey, label: sectionLabel, nodes: sectionNodes }) => {
          return (
            <Menu.SubMenu key={sectionKey} title={sectionLabel}>
              {sectionNodes.map((nodeTemplate) => (
                <Menu.Item
                  key={nodeTemplate.id}
                  className="node-list-item"
                >
                  <NodeTemplate
                    nodeTemplate={nodeTemplate}
                    onDragStart={(event) => onDragStart(event, nodeTemplate.id)}
                  />
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )
        })}
      </Menu>
    </>
  );
}

export default NodeTemplatesList;
