import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { useAction } from '../../hooks/use-actions';
import { setIsMenuCollapsed } from '../../redux/settings/settings-reducer';
import { selectIsSideMenuCollapsed } from '../../redux/settings/settings-selectors';

import SettingsMenu from './settings-menu';
import styleConstants from '../../constants/style/style-constants.module.scss';

import './base-layout.scss';

const { baseLayoutHeaderHeight } = styleConstants;

const headerStyles = { height: baseLayoutHeaderHeight };

const BaseLayoutHeader = () => {
  const isMenuCollapsed = useSelector(selectIsSideMenuCollapsed);

  const onSetIsMenuCollapsed = useAction(setIsMenuCollapsed);
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
      <SettingsMenu />
    </Layout.Header>
  );
}

export default BaseLayoutHeader;
