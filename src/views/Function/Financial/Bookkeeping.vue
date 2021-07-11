<template>
  <div class="selector-area">
    <el-select
      class="voucher-template-select"
      v-model="voucherTemplateName"
      placeholder="制证模板"
      no-match-text="未找到..."
      size="small"
      clearable
      filterable
      default-first-option
    >
      <el-option
        v-for="item in voucherTemplateOptions"
        :key="item.encoding"
        :label="item.name"
        :value="item.encoding"
      >
        <span style="float: left">{{ item.name }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.encoding
        }}</span>
      </el-option>
    </el-select>

    <el-tooltip
      content="仅支持 .xls,.xlsx 文件"
      placement="bottom"
      effect="light"
      transition="el-fade-in-linear"
    >
      <el-button
        size="small"
        type="primary"
        class="files-upload-button"
        @click="filesUploadDrawer = true"
      >
        文件导入
        <i class="el-icon-folder-opened el-icon--right"></i>
      </el-button>
    </el-tooltip>

    <el-drawer
      title="文件导入"
      :append-to-body="true"
      v-model="filesUploadDrawer"
      :with-header="true"
    >
      <el-upload
        class="files-upload-box"
        ref="uploadFiles"
        action="#"
        :auto-upload="false"
        accept=".xls, .xlsx"
        multiple
        :on-change="handleFilesChange"
      >
        <template #trigger>
          <el-button
            size="small"
            type="primary"
            style="margin: 0 10px 10px 0px"
          >
            选取文件
            <i class="el-icon-folder-add el-icon--right"></i>
          </el-button>
        </template>
        <el-button
          style="margin: 0 10px 10px 0px"
          size="small"
          type="success"
          @click="submitUploadFiles"
        >
          上传文件
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
        <el-button
          style="margin: 0 10px 10px 0px"
          size="small"
          type="danger"
          @click="clearUploadFiles"
        >
          <i class="el-icon-delete"></i>
        </el-button>
        <template #tip>
          <div class="el-upload__tip">仅支持 .xls,.xlsx 文件</div>
        </template>
      </el-upload>
    </el-drawer>
  </div>

  <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
  <HandsOnTable
    :handsOnTableSetting="handsOnTableSetting"
    class="handsontable"
  ></HandsOnTable>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import HandsOnTable from "@/components/HandsOnTable/HandsOnTable.vue";
import XLSX from "xlsx";
export default defineComponent({
  name: "Bookkeeping",
  components: {
    // HotTable,
    HandsOnTable,
  },
  setup() {
    // eslint-disable-next-line
    let that: any = getCurrentInstance();
    let voucherTemplateOptions = [
      {
        name: "收入收款",
        encoding: "T1",
      },
      {
        name: "收入确认",
        encoding: "T2",
      },
      {
        name: "收入结转",
        encoding: "T3",
      },
    ];
    let voucherTemplateName = ref();
    let filesUploadDrawer = ref(false);
    let submitUploadFiles = () => {
      that.refs.uploadFiles.submit();
    };
    let clearUploadFiles = () => {
      // that.refs["uploadFiles"].clearFiles();
      that.refs.uploadFiles.clearFiles();
    };
    // eslint-disable-next-line
    let handleFilesChange = (file: any, fileList: any) => {
      let fileReader = new FileReader();
      // fileReader.readAsBinaryString(file.raw);
      fileReader.readAsArrayBuffer(file.raw);
      fileReader.onload = () => {
        let workBook = XLSX.read(fileReader.result, { type: "buffer" });
        let sheetNameList = workBook.SheetNames;
        let sheetResult = XLSX.utils.sheet_to_json(
          workBook.Sheets[sheetNameList[0]],
          { header: 1 }
        );
        handsOnTableSetting.value.data = sheetResult as string[][];
      };
    };
    let tableData = [
      ["T", "Ford", "Tesla", "Toyota", "Honda"],
      ["2017", 10, 11, 12, 25],
      ["2018", 20, 11, 14, 13],
      ["2019", 30, 15, 12, 13],
    ];
    let handsOnTableSetting = ref({
      data: tableData,
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
      search: true,
      contextMenu: true, //右键显示更多功能,
      autoColumnSize: true,
      // comments: true,
      copyable: true,
      // stretchH: "all",
      // preventOverflow: "horizontal",
      // readOnly: true,
      language: "zh-CN",
    });
    return {
      voucherTemplateOptions,
      voucherTemplateName,
      filesUploadDrawer,
      submitUploadFiles,
      clearUploadFiles,
      handsOnTableSetting,
      handleFilesChange,
    };
  },
});
</script>

<style scoped lang="less">
.selector-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.voucher-template-select {
  padding-right: 10px;
  margin-bottom: 10px;
}
.voucher-files-upload {
  padding-right: 10px;
  // max-height: 32px;
}
.files-upload-button {
  height: 32px;
}
.files-upload-box {
  padding: 15px;
  margin-top: -32px;
}
.handsontable {
  height: calc(100vh - 20px - 39px - 20px - 42px - 49px);
  width: calc(100% - 200px);
  overflow: hidden;
}
</style>
