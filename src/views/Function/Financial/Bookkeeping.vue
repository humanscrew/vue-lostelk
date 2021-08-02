<template>
  <div class="selector-area">
    <el-select class="template-select" v-model="voucherTemplateName" placeholder="制证模板" no-match-text="未找到..." size="small" clearable filterable default-first-option>
      <el-option v-for="item in voucherTemplateOptions" :key="item.encoding" :label="item.name" :value="item.encoding">
        <span style="float: left">{{ item.name }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.encoding }}</span>
      </el-option>
    </el-select>

    <div class="files-upload-button">
      <el-tooltip content="仅支持 .xls,.xlsx 文件" placement="bottom" effect="light" transition="el-fade-in-linear">
        <el-badge :value="uploadFilesKeep.length" :max="10" type="danger">
          <el-button size="small" type="primary" @click="filesUploadDrawer = true">
            文件导入
            <i class="el-icon-folder-opened el-icon--right"></i>
          </el-button>
        </el-badge>
      </el-tooltip>
    </div>

    <el-select
      class="template-select"
      v-model="currentFileIndex"
      placeholder="选择工作簿"
      no-match-text="未找到..."
      no-data-text="请导入.xls,.xlsx文件"
      size="small"
      filterable
      default-first-option
      @change="fileSelectChange"
    >
      <el-option v-for="(item, index) in uploadFilesKeep" :key="item.file.name" :label="item.file.name" :value="index">
        <span style="float: left">{{ item.file.name }}</span>
        <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.encoding
        }}</span> -->
      </el-option>
    </el-select>

    <el-select
      class="template-select"
      v-model="currentSheetIndex"
      placeholder="选择工作表"
      no-match-text="未找到..."
      no-data-text="请导入.xls,.xlsx文件"
      size="small"
      filterable
      default-first-option
      @change="sheetSelectChange"
    >
      <el-option v-for="(item, index) in currentSheetNameList" :key="index" :label="item" :value="index">
        <span style="float: left">{{ item }}</span>
      </el-option>
    </el-select>

    <div class="files-export-button">
      <el-tooltip content="导出当前工作表.xlsx文件" placement="bottom" effect="light" transition="el-fade-in-linear">
        <el-button size="small" type="primary" @click="exportCurrentSheet">
          导出
          <i class="el-icon-notebook-2 el-icon--right"></i>
        </el-button>
      </el-tooltip>
    </div>

    <el-drawer title="文件导入" :append-to-body="true" v-model="filesUploadDrawer" :with-header="true">
      <el-upload class="files-upload-box" ref="uploadFiles" action="#" :auto-upload="false" accept=".xls, .xlsx" multiple :on-change="handleFilesChange" :before-upload="beforeUpload">
        <template #trigger>
          <el-button size="small" type="primary" style="margin: 0 10px 10px 0px">
            选取文件
            <i class="el-icon-folder-add el-icon--right"></i>
          </el-button>
        </template>
        <el-button style="margin: 0 10px 10px 0px" size="small" type="success" @click="submitUploadFiles">
          上传文件
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
        <el-button style="margin: 0 10px 10px 0px" size="small" type="danger" @click="clearUploadFiles">
          <i class="el-icon-delete"></i>
        </el-button>
        <template #tip>
          <div class="el-upload__tip">仅支持 .xls,.xlsx 文件</div>
        </template>
      </el-upload>
    </el-drawer>
  </div>

  <el-divider><i class="el-icon-data-analysis"></i></el-divider>

  <HandsOnTable :handsOnTableSetting="handsOnTableSetting" @refHandsOnTable="getRefHandsOnTable" class="handsontable"></HandsOnTable>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, getCurrentInstance, ref } from "vue";
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
      // let temp = await fileRepeatDeal();
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
