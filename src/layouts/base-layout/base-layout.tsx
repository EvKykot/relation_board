import React, { FC, ReactNode } from 'react';
import { Layout } from 'antd';

import BaseLayoutSider from './base-layout-sider';
import BaseLayoutHeader from './base-layout-header';
import BaseLayoutContent from './base-layout-content';

import './base-layout.scss';

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => (
  <>
    <BaseLayoutSider />
    <Layout.Content>
      <BaseLayoutHeader />
      <BaseLayoutContent>
        {children}
      </BaseLayoutContent>
    </Layout.Content>
  </>
);

export default BaseLayout;
