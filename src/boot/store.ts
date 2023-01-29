import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import nodeTemplatesReducer from '../redux/node-templates/node-templates-reducer';
import settingsReducer from '../redux/settings/settings-reducer';
import boardReducer from "../redux/board/board-reducer";

const reducer = {
  board: boardReducer,
  nodeTemplates: nodeTemplatesReducer,
  settings: settingsReducer,
};

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
