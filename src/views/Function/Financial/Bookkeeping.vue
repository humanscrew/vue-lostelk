<template>
  <div class="selector-area">
    <el-select
      class="template-select"
      clearable
      default-first-option
      filterable
      no-match-text="未找到..."
      placeholder="制证模板"
      size="small"
      v-model="voucherTemplateName"
    >
      <el-option
        :key="item.encoding"
        :label="item.name"
        :value="item.encoding"
        v-for="item in voucherTemplateOptions"
      >
        <span style="float: left">{{ item.name }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.encoding
        }}</span>
      </el-option>
    </el-select>

    <div class="files-upload-button">
      <el-tooltip
        content="仅支持 .xls,.xlsx 文件"
        effect="light"
        placement="bottom"
        transition="el-fade-in-linear"
      >
        <el-badge :max="10" :value="uploadFilesKeep.length" type="danger">
          <el-button
            @click="filesUploadDrawer = true"
            size="small"
            type="primary"
          >
            文件导入
            <i class="el-icon-folder-opened el-icon--right"></i>
          </el-button>
        </el-badge>
      </el-tooltip>
    </div>

    <el-select
      @change="fileSelectChange"
      class="template-select"
      default-first-option
      filterable
      no-data-text="请导入.xls,.xlsx文件"
      no-match-text="未找到..."
      placeholder="选择工作簿"
      size="small"
      v-model="currentFileIndex"
    >
      <el-option
        :key="item.file.name"
        :label="item.file.name"
        :value="index"
        v-for="(item, index) in uploadFilesKeep"
      >
        <span style="float: left">{{ item.file.name }}</span>
        <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.encoding
        }}</span>-->
      </el-option>
    </el-select>

    <el-select
      @change="sheetSelectChange"
      class="template-select"
      default-first-option
      filterable
      no-data-text="请导入.xls,.xlsx文件"
      no-match-text="未找到..."
      placeholder="选择工作表"
      size="small"
      v-model="currentSheetIndex"
    >
      <el-option
        :key="index"
        :label="item"
        :value="index"
        v-for="(item, index) in currentSheetNameList"
      >
        <span style="float: left">{{ item }}</span>
      </el-option>
    </el-select>

    <div class="files-export-button">
      <el-tooltip
        content="导出当前工作表.xlsx文件"
        effect="light"
        placement="bottom"
        transition="el-fade-in-linear"
      >
        <el-button @click="exportCurrentSheet" size="small" type="primary">
          导出
          <i class="el-icon-notebook-2 el-icon--right"></i>
        </el-button>
      </el-tooltip>
    </div>

    <el-drawer
      :append-to-body="true"
      :with-header="true"
      title="文件导入"
      v-model="filesUploadDrawer"
    >
      <el-upload
        :auto-upload="false"
        :before-upload="beforeUpload"
        :on-change="handleFilesChange"
        accept=".xls, .xlsx"
        action="#"
        class="files-upload-box"
        multiple
        ref="uploadFiles"
      >
        <template #trigger>
          <el-button
            size="small"
            style="margin: 0 10px 10px 0px"
            type="primary"
          >
            选取文件
            <i class="el-icon-folder-add el-icon--right"></i>
          </el-button>
        </template>
        <el-button
          @click="submitUploadFiles"
          size="small"
          style="margin: 0 10px 10px 0px"
          type="success"
        >
          上传文件
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
        <el-button
          @click="clearUploadFiles"
          size="small"
          style="margin: 0 10px 10px 0px"
          type="danger"
        >
          <i class="el-icon-delete"></i>
        </el-button>
        <template #tip>
          <div class="el-upload__tip">仅支持 .xls,.xlsx 文件</div>
        </template>
      </el-upload>
    </el-drawer>
  </div>

  <el-divider>
    <i class="el-icon-data-analysis"></i>
  </el-divider>

  <HandsOnTable
    :handsOnTableSetting="handsOnTableSetting"
    @refHandsOnTable="getRefHandsOnTable"
    class="handsontable"
  ></HandsOnTable>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, getCurrentInstance, onMounted, ref } from "vue";
import HandsOnTable from "@/components/HandsOnTable/HandsOnTable.vue";
import { defaultHandsOnTableSetting, emptySheetData } from "@/components/HandsOnTable/handsOnTableSetting";
import _ from "lodash";
import { loadXLSX, exportArray2Sheet } from "@/plugins/sheetjs";
// import { ElMessageBox } from "element-plus";
import { ElMessage, ElLoading } from "element-plus";

export default defineComponent({
  name: "Bookkeeping",
  components: {
    // HotTable,
    HandsOnTable,
  },
  setup() {
    let that: any = getCurrentInstance();
    let refHandsOnTable = ref();
    let getRefHandsOnTable = (refDom: any) => {
      refHandsOnTable.value = refDom;
    };
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
      uploadFilesKeep.value = [];
      currentFileIndex.value = null;
      currentSheetNameList.value = [];
      currentSheetIndex.value = null;
      handsOnTableSetting.value.data = emptySheetData;
    };
    let fileSelectChange = () => {
      currentSheetIndex.value = 0;
      currentSheetNameList.value = uploadFilesKeep.value[currentFileIndex.value].sheetNameList;
      handsOnTableSetting.value.data = uploadFilesKeep.value[currentFileIndex.value].sheetData[currentSheetIndex.value];
    };
    let sheetSelectChange = () => {
      handsOnTableSetting.value.data = uploadFilesKeep.value[currentFileIndex.value].sheetData[currentSheetIndex.value];
    };
    // let fileRepeatDeal = () =>
    //   ElMessageBox.confirm("存在重复文件名, 是否更新该文件?", "文件重复", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //     center: true,
    //   })
    //     .then(() => {
    //       ElMessage({
    //         type: "success",
    //         message: "文件更新成功!",
    //       });
    //     })
    //     .catch(() => {
    //       ElMessage({
    //         type: "info",
    //         message: "已取消",
    //       });
    //     });
    let uploadFilesKeep = ref<any[]>([]);
    let currentFileIndex = ref();
    let currentSheetNameList = ref();
    let currentSheetIndex = ref();
    let beforeUpload = () => {
      console.log("beforeUpload");
    };
    let handleFilesChange = async (file: any, fileList: any) => {
      let loadingInstance = ElLoading.service({
        lock: true,
        text: "文件解析中...",
        // spinner: "el-icon-loading",
        // background: "rgba(0, 0, 0, 0.7)",
        target: refHandsOnTable.value,
        // fullscreen: true,
      });
      let isFileRepeat = false;
      uploadFilesKeep.value.forEach((item: any) => {
        if (file.name === item.file.name) {
          isFileRepeat = true;
        }
      });
      if (isFileRepeat) {
        ElMessage({
          type: "error",
          message: "文件名重复!",
        });
        loadingInstance.close();
        return;
      }
      let XLSXResult: any = await loadXLSX(file, fileList);
      currentSheetNameList.value = XLSXResult.sheetNameList;
      currentSheetIndex.value = 0;
      handsOnTableSetting.value.data = XLSXResult.sheetData[currentSheetIndex.value];
      uploadFilesKeep.value.push(XLSXResult);
      currentFileIndex.value = uploadFilesKeep.value.length - 1;
      loadingInstance.close();
      filesUploadDrawer.value = false;
    };
    let handsOnTableSetting = ref(_.cloneDeep(defaultHandsOnTableSetting));
    let exportCurrentSheet = async () => {
      if (currentFileIndex.value == null) {
        return;
      }
      let loadingInstance = await ElLoading.service({
        lock: true,
        text: "文件导出中...",
        target: refHandsOnTable.value,
        // fullscreen: true,
      });
      await exportArray2Sheet(handsOnTableSetting.value.data as [], uploadFilesKeep.value[currentFileIndex.value].file.name, currentSheetNameList.value[currentSheetIndex.value]);
      loadingInstance.close();
    };
    return {
      voucherTemplateOptions,
      voucherTemplateName,
      filesUploadDrawer,
      submitUploadFiles,
      clearUploadFiles,
      handsOnTableSetting,
      getRefHandsOnTable,
      beforeUpload,
      handleFilesChange,
      currentFileIndex,
      currentSheetNameList,
      currentSheetIndex,
      uploadFilesKeep,
      fileSelectChange,
      sheetSelectChange,
      exportCurrentSheet,
    };
  },
});
</script>

<style scoped lang="less">
.selector-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
}
.template-select {
  padding-right: 10px;
  margin-bottom: 10px;
}
.files-upload-button {
  height: 32px;
  margin-right: 20px;
  margin-bottom: 10px;
}
.files-upload-box {
  padding: 15px;
  margin-top: -32px;
}
.handsontable {
  height: calc(100vh - 20px - 39px - 20px - 42px - 21px - 20px);
  // width: calc(100% - 20px);
  overflow: hidden;
}
.el-divider--horizontal {
  margin: 0px;
  margin-bottom: 20px;
}
</style>
