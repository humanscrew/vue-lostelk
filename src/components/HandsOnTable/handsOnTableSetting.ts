const emptySheetData = new Array(25).fill("").map(() => new Array(26));
const defaultHandsOnTableSetting = {
  data: emptySheetData,
  rowHeaders: true,
  colHeaders: true,
  filters: true,
  headerTooltips: true,
  observeChanges: true,
  // editor: false,
  // trimRows: true,
  wordWrap: true,
  dropdownMenu: true,
  manualColumnMove: true, //是否能拖动列
  manualColumnResize: true,
  manualRowMove: true,
  manualRowResize: true,
  manualColumnFreeze: true,
  mergeCells: true,
  search: true,
  contextMenu: true, //右键显示更多功能,
  autoColumnSize: true,
  // comments: true,
  copyable: true,
  // stretchH: "all",
  // preventOverflow: "horizontal",
  readOnly: false,
  language: "zh-CN",
};

export { defaultHandsOnTableSetting, emptySheetData };
