import React, { FC, memo } from 'react';
import { Node, Position } from 'reactflow';

import NodeHandle from "../../node-handle/node-handle";
import NodeContextMenu from "../../node-context-menu/node-context-menu";

import './text-node.scss';

type DefaultNodeProps = Pick<Node, 'id' | 'data'> & {
  isConnectable: boolean;
}

const DefaultNode: FC<DefaultNodeProps> = memo(({ id, data, isConnectable }) => (
  <NodeContextMenu nodeId={id}>
    <div className="custom-node text-node">
      <NodeHandle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div>{data.label}</div>
      <NodeHandle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  </NodeContextMenu>
));

export default DefaultNode;
