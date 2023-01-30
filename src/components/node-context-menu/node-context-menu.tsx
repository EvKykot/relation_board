import React, { ChangeEvent, FC, ReactNode, useCallback, useState } from 'react';
import { Popover, Input } from 'antd';

import { useAction } from "../../hooks/use-actions";
import { updateNodeData } from "../../redux/board/board-reducer";
import { selectEdges, selectHandleMap, selectNodesMap } from "../../redux/board/board-selectors";

import { makeUseStructuredSelector } from "../../hooks/make-use-structured-selector";

import Button from '../button/button';
import './node-context-menu.scss';

type NodeContextMenuProps = {
  nodeId: string;
  children: ReactNode;
}

const useNodeContextMenuSelectors = makeUseStructuredSelector({
  edges: selectEdges,
  nodesMap: selectNodesMap,
  handleMap: selectHandleMap,
});

const NodeContextMenu: FC<NodeContextMenuProps> = ({ nodeId, children }) => {
  const { nodesMap } = useNodeContextMenuSelectors();

  const node = nodesMap[nodeId];
  const onUpdateNodeData = useAction(updateNodeData);

  const [label, setLabel] = useState(node.data.label);
  const [isVisible, setIsVisible] = useState(false);

  const onClose = () => setIsVisible(false);
  const onHandleOpenChange = (newOpen: boolean) => setIsVisible(newOpen);
  const onChangeNodeLabel = (event: ChangeEvent<HTMLInputElement>) => setLabel(event.target.value);

  const onSave = useCallback(() => {
    if (!node.id) return;
    onUpdateNodeData({ id: node.id, data: { label }});
  }, [label, node.id, onUpdateNodeData]);

  return (
    <Popover
      title="Edit node"
      trigger="contextMenu"
      open={isVisible}
      content={(
        <div className="node-context-menu">
          <Input id="text" name="text" value={label} onChange={onChangeNodeLabel} />
          <div className="node-context-menu-actions">
            <Button onClick={onClose}>Close</Button>
            <Button onClick={onSave}>Save</Button>
          </div>
        </div>
      )}
      onOpenChange={onHandleOpenChange}
    >
      {children}
    </Popover>
  );
};

export default NodeContextMenu;
