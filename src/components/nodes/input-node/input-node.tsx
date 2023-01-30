import React, { FC, memo } from 'react';
import { Node, Position } from 'reactflow';

import NodeHandle from "../../node-handle/node-handle";
import NodeContextMenu from "../../node-context-menu/node-context-menu";

import './input-node.scss';

type InputNodeProps = Pick<Node, 'id' | 'data'> & {
  isConnectable: boolean;
}

const InputNode: FC<InputNodeProps> = memo(({ id, data, isConnectable }) => (
  <NodeContextMenu nodeId={id}>
    <div className="custom-node input-node">
      <div>{data.label || 'Input node'}</div>
      <NodeHandle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  </NodeContextMenu>
));

export default InputNode;
