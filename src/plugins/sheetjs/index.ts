import XLSX from "xlsx";

export function loadXLSX(file: any, fileList: any) {
  return new Promise(function (resolve, reject) {
    let fileBuffer: any;
    let workBook: any;
    let sheetNameList: any;
    const sheetData: any[] = [];
    const fileReader = new FileReader();
    // fileReader.readAsBinaryString(file.raw);
    fileReader.readAsArrayBuffer(file.raw);
    fileReader.onload = () => {
      fileBuffer = fileReader.result;
      workBook = XLSX.read(fileReader.result, {
        type: "buffer",
      });
      sheetNameList = workBook.SheetNames;
      for (let sheetIndex = 0, sheetLen = sheetNameList.length; sheetIndex < sheetLen; sheetIndex++) {
        const sheetJson = XLSX.utils.sheet_to_json(
          workBook.Sheets[sheetNameList[sheetIndex]],
          { header: 1 }
        )
        sheetData.push(sheetJson)
      }
      resolve({
        file,
        fileBuffer,
        fileList,
        workBook,
        sheetNameList,
        sheetData,
      });
    };
  });
}
