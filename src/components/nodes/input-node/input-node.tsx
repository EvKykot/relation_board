import React, {FC, memo} from 'react';
import { Node, Position } from 'reactflow';
import { nanoid } from "@reduxjs/toolkit";

import NodeHandle from "../../node-handle/node-handle";

import './input-node.scss';

type InputNodeProps = Pick<Node, 'data'> & {
  isConnectable: boolean;
}

const InputNode: FC<InputNodeProps> = memo(({ data, isConnectable }) => {
  return (
    <div className="custom-node input-node">
      <div>{data.label || 'Input node'}</div>
      <NodeHandle
        id={nanoid()}
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
});

export default InputNode;
