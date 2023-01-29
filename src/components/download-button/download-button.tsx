import React from "react";

import { useSelector } from "react-redux";
import { downloadFile } from "../../utils/download-file";
import { selectBoardFlow } from "../../redux/board/board-selectors";

import Button from "../button/button";

const DownloadButton = () => {
  const boardFlow = useSelector(selectBoardFlow);
  const onDownloadJsonData = () => downloadFile(boardFlow);

  return (
    <Button
      type="primary"
      disabled={!boardFlow.nodes.length}
      onClick={onDownloadJsonData}
    >
      Download
    </Button>
  );
}

export default DownloadButton;
