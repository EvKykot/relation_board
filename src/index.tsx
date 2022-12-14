import { Alert } from 'antd';
import React from 'react';
import { createRoot } from 'react-dom/client';

const { ErrorBoundary } = Alert;
import App from './boot/app';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
