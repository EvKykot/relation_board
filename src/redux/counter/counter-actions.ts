import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchCount} from "../../api/counter-api";
import {AppThunk} from "../../boot/store";
import {incrementByAmount} from './counter-reducer';
import {selectCount} from "./counter-selectors";

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const incrementIfOdd =
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      const currentValue = selectCount(getState());
      if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
      }
    };

