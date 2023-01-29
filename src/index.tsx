import { Alert } from 'antd';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './boot/app';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Alert.ErrorBoundary>
    <App />
  </Alert.ErrorBoundary>
);
