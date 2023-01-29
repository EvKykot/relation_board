import React, {FC, memo} from "react";
import { Handle, Position, HandleType, OnConnect } from "reactflow";

type NodeHandleProps = {
  id?: string;
  position?: Position;
  type?: HandleType;
  isConnectable: boolean;
  onConnect?: OnConnect;
}

const NodeHandle: FC<NodeHandleProps> = memo((props) => {
  const { id, type = 'target', position = Position.Left, isConnectable, onConnect } = props;

  return (
    <Handle
      id={id}
      type={type}
      position={position}
      isConnectable={isConnectable}
      className="node-handle"
      onConnect={onConnect}
    />
  );
});

export default NodeHandle;
