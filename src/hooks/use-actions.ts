import { useCallback, useMemo } from 'react';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { TypedDispatch, TypedThunk } from '../types/redux-types';

export const useActions = <A, M extends ActionCreatorsMapObject<A>, D extends any[]>(actions: M, deps?: D) => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators<A, M>(actions, dispatch),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : [dispatch]
  );
};

export const useAction = <T extends AnyAction | TypedThunk, TAction extends ActionCreator<T>, D extends any[]>(action: TAction, deps?: D) => {
  const dispatch: TypedDispatch = useDispatch();
  return useCallback(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (...args: Parameters<TAction>) => {
      dispatch(action.apply(action, args));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : [dispatch]
  );
};

export const makeUseActions = <A, M extends ActionCreatorsMapObject<A>, D extends any[]>(actions: M) => {
  return () => useActions(actions);
};
