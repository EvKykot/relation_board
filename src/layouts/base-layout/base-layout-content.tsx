import React, { FC, ReactNode } from 'react';
import { Layout } from 'antd';

import styleConstants from '../../constants/style/style-constants.module.scss';
import './base-layout.scss';

const { baseLayoutHeaderHeight, baseLayoutContentPadding } = styleConstants;

const contentStyles = {
  padding: baseLayoutContentPadding,
  height: `calc(100% - ${baseLayoutHeaderHeight})`
};

type BaseLayoutContentProps = {
  children: ReactNode;
};

const BaseLayoutContent: FC<BaseLayoutContentProps> = ({ children }) => (
  <Layout.Content className="layout-content" style={contentStyles}>
    {children}
  </Layout.Content>
);

export default BaseLayoutContent;
