import INITIAL_BOARD_JSON_DATA from './default-board-flow.json';
import { getStringifyJsonData } from "../../utils/json-utils";

export const DEFAULT_BOARD_STATE = {
  nodes: [],
  edges: [],
  viewport: {x: 0, y: 0, zoom: 0},
};

// TODO: example of some initial data
export const INITIAL_BOARD_STATE = getStringifyJsonData(INITIAL_BOARD_JSON_DATA);
