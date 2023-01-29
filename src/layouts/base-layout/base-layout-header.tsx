import React from 'react';
import { Layout, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { clearBoard } from "../../redux/board/board-reducer";
import { makeUseActions } from '../../hooks/use-actions';
import { setIsMenuCollapsed } from '../../redux/settings/settings-reducer';
import { selectIsSideMenuCollapsed } from '../../redux/settings/settings-selectors';

import Button from "../../components/button/button";
import SettingsMenu from './settings-menu';
import DownloadButton from "../../components/download-button/download-button";

import styleConstants from '../../constants/style/style-constants.module.scss';
import './base-layout.scss';

const { baseLayoutHeaderHeight } = styleConstants;

const headerStyles = { height: baseLayoutHeaderHeight };

const useBaseLayoutHeaderActions = makeUseActions({
  onSetIsMenuCollapsed: setIsMenuCollapsed,
  onClearBoard: clearBoard,
});

const BaseLayoutHeader = () => {
  const isMenuCollapsed = useSelector(selectIsSideMenuCollapsed);

  const { onSetIsMenuCollapsed, onClearBoard } = useBaseLayoutHeaderActions();
  const onToggleMenu = () => onSetIsMenuCollapsed(!isMenuCollapsed);

  return (
    <Layout.Header className="content-header" style={headerStyles}>
      <div className="content-header-left-block">
        <div className="trigger" onClick={onToggleMenu}>
          {isMenuCollapsed
            ? <MenuUnfoldOutlined className="trigger-icon" />
            : <MenuFoldOutlined className="trigger-icon" />
          }
        </div>
      </div>
      <div className="content-header-right-block">
        <Popconfirm
          okText="Yes"
          cancelText="No"
          placement="bottomRight"
          title="Are you sure you want to delete this board?
          They will be impossible to restore."
          onConfirm={onClearBoard}
        >
          <Button>Clear</Button>
        </Popconfirm>
        <DownloadButton />
        <SettingsMenu />
      </div>
    </Layout.Header>
  );
}

export default BaseLayoutHeader;
