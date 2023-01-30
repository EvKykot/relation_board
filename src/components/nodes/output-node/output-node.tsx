import React, { FC, memo } from 'react';
import { Node, Position } from 'reactflow';

import NodeHandle from "../../node-handle/node-handle";
import NodeContextMenu from "../../node-context-menu/node-context-menu";

import './output-node.scss';

type OutputNodeProps = Pick<Node, 'id' | 'data'> & {
  isConnectable: boolean;
}

const OutputNode: FC<OutputNodeProps> = memo(({ id, data, isConnectable }) => (
  <NodeContextMenu nodeId={id}>
    <div className="custom-node output-node">
      <NodeHandle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div>
        {data.label || 'Input node'}
      </div>
    </div>
  </NodeContextMenu>
));

export default OutputNode;
