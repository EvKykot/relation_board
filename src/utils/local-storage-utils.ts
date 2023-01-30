export enum LocalStorageKeys {
  boardFlow = 'board-flow',
}

export const setBoardFlowToLS = (boardFlow: string) => localStorage.setItem(LocalStorageKeys.boardFlow, boardFlow);
export const getBoardFlowFromLS = () => localStorage.getItem(LocalStorageKeys.boardFlow);
export const clearBoardFlowFromLS = () => localStorage.setItem(LocalStorageKeys.boardFlow, '');
