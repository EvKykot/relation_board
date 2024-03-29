import { BoardState } from "./board-types";
import { getBoardFlowFromLS } from "../../utils/local-storage-utils";
import { DEFAULT_BOARD_STATE, INITIAL_BOARD_STATE } from "./board-constants";
import { getParsedJsonData } from "../../utils/json-utils";

export const getInitialState = (): BoardState => {
  const lsBoardFlow = getBoardFlowFromLS();
  const boardFlow = getParsedJsonData(lsBoardFlow, 'Can\'t load board flow from local storage');
  const initialBoardFlow = getParsedJsonData(INITIAL_BOARD_STATE, 'Can\'t load board flow from local storage');

  if (boardFlow) return { ...DEFAULT_BOARD_STATE, ...boardFlow };
  if (initialBoardFlow) return initialBoardFlow;
  return DEFAULT_BOARD_STATE;
}
