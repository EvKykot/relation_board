import {RootState} from "../../boot/store";

export const selectCount = (state: RootState) => state.counter.value;
