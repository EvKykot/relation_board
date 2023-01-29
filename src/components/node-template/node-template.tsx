import React, { FC, DragEvent } from "react";
import { VerticalRightOutlined, VerticalLeftOutlined } from "@ant-design/icons";

import { NodeTemplateType, NodeTemplateTypes } from "../../redux/node-templates/node-templates-types";
import { getNodeTemplateIcon } from "./node-template-utils";
import './node-template.scss';

type NodeItemProps = {
  nodeTemplate: NodeTemplateType;
  onDragStart: (event: DragEvent<HTMLDivElement>) => void;
}

const NodeTemplate: FC<NodeItemProps> = (props) => {
  const { nodeTemplate: { id, type, label }, onDragStart } = props;

  const inputConnection = type !== NodeTemplateTypes.output;
  const outputConnection = type !== NodeTemplateTypes.input;
  const nodeIcon = getNodeTemplateIcon(type);

  return (
    <div key={id} draggable className="node-item" onDragStart={onDragStart}>
      {outputConnection && <div className="node-icon-connection"><VerticalRightOutlined /></div>}
      <div className="node-item-content">
        <div className="node-item-icon">{nodeIcon}</div>
        <div className="node-item-label">{label}</div>
      </div>
      {inputConnection && <div className="node-icon-connection"><VerticalLeftOutlined /></div>}
    </div>
  );
};

export default NodeTemplate;
