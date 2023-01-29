import React, {FC, memo} from 'react';
import { Node, Position } from 'reactflow';

import NodeHandle from "../../node-handle/node-handle";

import './output-node.scss';

type OutputNodeProps = Pick<Node, 'data'> & {
  isConnectable: boolean;
}

const OutputNode: FC<OutputNodeProps> = memo(({ data, isConnectable }) => {
  return (
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
  );
});

export default OutputNode;
