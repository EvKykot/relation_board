import React, { useState, DragEvent } from "react";
import { Menu } from "antd";

import { REACT_FLOW_APP } from "../../constants/react-flow-board";
import useNodeTemplatesListSelectors from "./use-node-templates-list-selectors";
import NodeTemplate from "../node-template/node-template";

import './node-templates-list.scss';

const NodeTemplatesList = () => {
  const { sectionsData } = useNodeTemplatesListSelectors();

  const [selectedKey, setSelectedKey] = useState<string>('');
  const [openKeys, setOpenKeys] = useState<string[]>(sectionsData.map(({ id }) => (id)));

  const defaultOpenKeys = sectionsData.map(({ id }) => (id));

  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeTemplateId: string) => {
    event.dataTransfer.setData(REACT_FLOW_APP, nodeTemplateId);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Menu
      mode="inline"
      theme="dark"
      className="base-layout-nav-menu"
      style={{ height: 'calc(100% - 150px)' }}
      // selectedKeys={[selectedKey]}
      defaultOpenKeys={openKeys}
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
  );
}

export default NodeTemplatesList;
