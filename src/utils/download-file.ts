import { getStringifyJsonData } from "./json-utils";

export const downloadFile = (myData: unknown, fileName = 'board-flow-file') => {
  const json = getStringifyJsonData(myData, undefined, 2);
  if (!json) return;

  const blob = new Blob([json], { type: "application/json" });
  const href = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};
