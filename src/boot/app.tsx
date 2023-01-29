import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import Router from './router';
import AppProviders from './app-providers';
import BaseLayout from '../layouts/base-layout/base-layout';
import './app.scss';

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <Layout className="app-layout">
        <BaseLayout>
          <Router />
        </BaseLayout>
      </Layout>
    </BrowserRouter>
  </AppProviders>
);

export default App;
