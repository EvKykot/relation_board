import React from 'react';
import { Layout } from 'antd';

import AppProviders from './app-providers';
import BaseLayout from '../layouts/base-layout/base-layout';
import BoardPage from "../pages/board/board-page";

import './app.scss';

const App = () => (
  <AppProviders>
      <Layout className="app-layout">
        <BaseLayout>
          <BoardPage />
        </BaseLayout>
      </Layout>
  </AppProviders>
);

export default App;
