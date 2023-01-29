import React from "react";
import { HomeOutlined, LoginOutlined, LogoutOutlined, PartitionOutlined, FileTextOutlined } from "@ant-design/icons";
import { NodeTemplateTypes } from "../../redux/node-templates/node-templates-types";

export const getNodeTemplateIcon = (type?: string) => {
  switch (type) {
    case NodeTemplateTypes.input: return <LoginOutlined/>;
    case NodeTemplateTypes.output: return <LogoutOutlined/>;
    case NodeTemplateTypes.selectorNode: return <PartitionOutlined />;
    case NodeTemplateTypes.textNode: return <FileTextOutlined />;
    case NodeTemplateTypes.default: return <HomeOutlined/>;
    default: return <HomeOutlined/>;
  }
};
