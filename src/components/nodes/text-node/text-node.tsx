import React, {ChangeEvent, FC, memo, useCallback} from 'react';
import { Node, Position } from 'reactflow';

import { useAction } from "../../../hooks/use-actions";
import { updateNodeData } from "../../../redux/board/board-reducer";

import NodeHandle from "../../node-handle/node-handle";
import './text-node.scss';

type TextNodeProps = Pick<Node, 'id' | 'data'> & {
  isConnectable: boolean;
}

const TextNode: FC<TextNodeProps> = memo((props) => {
  const { id, data, isConnectable } = props;

  const onUpdateNodeData = useAction(updateNodeData);

  const onChangeNodeLabel = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onUpdateNodeData({ id, data: { label: event.target.value }});
  }, [data, onUpdateNodeData]);

  return (
    <div className="custom-node text-node">
      <NodeHandle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div>
        <input id="text" name="text" value={data?.label} onChange={onChangeNodeLabel} />
      </div>
      <NodeHandle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
});

export default TextNode;
