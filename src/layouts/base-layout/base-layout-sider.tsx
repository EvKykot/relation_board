import React from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';

import { selectIsSideMenuCollapsed } from '../../redux/settings/settings-selectors';

import MainLogo from '../../components/main-logo/main-logo';
import NodeTemplatesList from "../../components/node-templates-list/node-templates-list";

import styleConstants from '../../constants/style/style-constants.module.scss';
import './base-layout.scss';

const { baseLayoutSidebarWidth } = styleConstants;

const BaseLayoutSider = () => {
  const isMenuCollapsed = useSelector(selectIsSideMenuCollapsed);

  return (
    <Layout.Sider
      collapsible
      trigger={null}
      collapsed={isMenuCollapsed}
      width={baseLayoutSidebarWidth}
      className="base-layout-sider"
    >
      <div className="logo">
        <MainLogo />
        {!isMenuCollapsed && (
          <h3 className="label">Nodes</h3>
        )}
      </div>
      <NodeTemplatesList />
    </Layout.Sider>
  );
};

export default BaseLayoutSider;
