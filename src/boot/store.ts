import {configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import nodeTemplatesReducer from '../redux/node-templates/node-templates-reducer';
import settingsReducer from '../redux/settings/settings-reducer';
import boardReducer from "../redux/board/board-reducer";
import boardSaga from "../redux/board/board-sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: true }), sagaMiddleware];

const reducer = {
  board: boardReducer,
  nodeTemplates: nodeTemplatesReducer,
  settings: settingsReducer,
};

export const store = configureStore({ reducer, middleware });
sagaMiddleware.run(boardSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
