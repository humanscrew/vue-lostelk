import XLSX from "xlsx";

export function loadXLSX(file: any, fileList: any, defaultSheetIndex = 0) {
  return new Promise(function (resolve, reject) {
    let currentWorkBook: any;
    let currentSheetNameList: any;
    let currentSheetData: any;
    const fileReader = new FileReader();
    // fileReader.readAsBinaryString(file.raw);
    fileReader.readAsArrayBuffer(file.raw);
    fileReader.onload = () => {
      currentWorkBook = XLSX.read(fileReader.result, {
        type: "buffer",
      });
      currentSheetNameList = currentWorkBook.SheetNames;
      currentSheetData = XLSX.utils.sheet_to_json(
        currentWorkBook.Sheets[currentSheetNameList[defaultSheetIndex]],
        { header: 1 }
      );
      resolve({
        file,
        fileList,
        currentWorkBook,
        currentSheetNameList,
        currentSheetData,
      });
    };
  });
}
