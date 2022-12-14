import { AnyAction, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../boot/store';

export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
