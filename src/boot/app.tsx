import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import Router from './router';
import AppProviders from './app-providers';
import SideMenu from '../containers/base-layout/side-menu';
import BaseLayout from '../containers/base-layout/base-layout';
import './app.scss';

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <Layout className="app-layout">
        <SideMenu />
        <BaseLayout>
          <Router />
        </BaseLayout>
      </Layout>
    </BrowserRouter>
  </AppProviders>
);

export default App;
