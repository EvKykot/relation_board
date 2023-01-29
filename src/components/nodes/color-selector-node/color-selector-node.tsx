import React, {FC, memo} from 'react';
import { Node, Position } from 'reactflow';

import NodeHandle from "../../node-handle/node-handle";

import './color-selector-node.scss';
import '../../../constants/style/common-node-styles.scss';

type ColorSelectorNodeProps = Pick<Node, 'data'> & {
  isConnectable: boolean;
}

const ColorSelectorNode: FC<ColorSelectorNodeProps> = memo(({ data, isConnectable }) => (
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
));

export default ColorSelectorNode;
