import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReactFlowProvider } from 'reactflow';

import { store } from './store';

type AppProviderProps = {
  children: ReactNode;
};

function AppProviders({ children }: AppProviderProps) {
  return (
    <ReactFlowProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </ReactFlowProvider>
  );
}

export default AppProviders;
