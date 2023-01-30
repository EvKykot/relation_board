import React, { FC, memo } from 'react';
import { Node, Position } from 'reactflow';

import NodeHandle from "../../node-handle/node-handle";
import NodeContextMenu from "../../node-context-menu/node-context-menu";

import './color-selector-node.scss';
import '../../../constants/style/common-node-styles.scss';

type ColorSelectorNodeProps = Pick<Node, 'id' | 'data'> & {
  isConnectable: boolean;
}

const ColorSelectorNode: FC<ColorSelectorNodeProps> = memo(({ id, data, isConnectable }) => (
  <NodeContextMenu nodeId={id}>
    <div className="custom-node">
      <NodeHandle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div className="node-label">
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input className="nodrag" type="color" defaultValue={data.color} onChange={data.onChange}  />
      <NodeHandle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  </NodeContextMenu>
));

export default ColorSelectorNode;
