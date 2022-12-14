import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

type AppProviderProps = {
  children: ReactNode;
};

function AppProviders({ children }: AppProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default AppProviders;
