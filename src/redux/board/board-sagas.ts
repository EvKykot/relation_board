import { select, takeLatest } from 'redux-saga/effects';
import { selectBoardFlow } from "./board-selectors";

import { BoardFlow } from "./board-types";
import { setBoardFlowToLS } from "../../utils/local-storage-utils";
import { getStringifyJsonData } from "../../utils/json-utils";

function* saveBoardFlow() {
  const boardFlow: BoardFlow = yield select(selectBoardFlow);
  const flow = getStringifyJsonData(boardFlow, 'Can\'t save board flow to local storage', 2);

  if (flow) setBoardFlowToLS(flow);
}

function* boardSaga() {
  yield takeLatest([
    'board/addNode',
    'board/changeNodes',
    'board/updateNodeData',
    'board/setEdges',
    'board/changeEdges',
    'board/setViewport',
    'board/clearBoard',
  ], saveBoardFlow);
}

export default boardSaga;
