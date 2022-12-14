import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { useAction } from '../../hooks/use-actions';
import { setIsMenuCollapsed } from '../../redux/settings/settings-reducer';
import { selectIsSideMenuCollapsed } from '../../redux/settings/settings-selectors';
import styleConstants from '../../constants/style/style-constants.module.scss';

import Loader from '../../components/loader';
import SettingsMenu from './settings-menu';

import './base-layout.scss';

type LayoutProps = {
  children: ReactNode;
};

function PageLayout(props: LayoutProps) {
  const { children } = props;

  const isLoading = false;
  const isMenuCollapsed = useSelector(selectIsSideMenuCollapsed);

  const onSetIsMenuCollapsed = useAction(setIsMenuCollapsed);
  const onToggleMenu = () => onSetIsMenuCollapsed(!isMenuCollapsed);

  const headerStyles = {
    height: styleConstants.baseLayoutHeaderHeight
  };

  const contentStyles = {
    padding: styleConstants.baseLayoutContentPadding,
    height: `calc(100% - ${styleConstants.baseLayoutHeaderHeight})`
  };

  return (
    <Layout.Content>
      <Layout.Header className="content-header" style={headerStyles}>
        <div className="content-header-left-block">
          <div className="trigger" onClick={onToggleMenu}>
            {isMenuCollapsed ? <MenuUnfoldOutlined className="trigger-icon" /> : <MenuFoldOutlined className="trigger-icon" />}
          </div>
          {/*<Breadcrumbs />*/}
        </div>
        <SettingsMenu />
      </Layout.Header>
      <Layout.Content className="layout-content" style={contentStyles}>
        {isLoading ? <Loader /> : children}
      </Layout.Content>
    </Layout.Content>
  );
}

export default PageLayout;
