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
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        accept=".xls,.xlsx"
        multiple
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

  <!-- <hotTable :data="data" :rowHeaders="true" :colHeaders="true"></hotTable> -->
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
export default defineComponent({
  name: "Bookkeeping",
  components: {
    // HotTable,
  },
  data() {
    return {
      data: [
        ["", "Ford", "Volvo", "Toyota", "Honda"],
        ["2016", 10, 11, 12, 13],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13],
      ],
    };
  },
  setup() {
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
      that.refs["uploadFiles"].submit();
    };
    let clearUploadFiles = () => {
      that.refs["uploadFiles"].clearFiles();
      // that.refs.uploadFiles.clearFiles();
    };
    return {
      voucherTemplateOptions,
      voucherTemplateName,
      filesUploadDrawer,
      submitUploadFiles,
      clearUploadFiles,
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
</style>
