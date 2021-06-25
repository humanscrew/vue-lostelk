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
      content="仅支持上传.xls,.xlsx文件"
      placement="bottom"
      effect="light"
      transition="el-fade-in-linear"
    >
      <el-button
        size="small"
        type="primary"
        class="files-upload-button"
        @click="filesUpload"
      >
        文件导入
      </el-button>
    </el-tooltip>
  </div>
  <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Bookkeeping",
  setup() {
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
    let filesUpload = () => {
      console.log("FilesUpload");
    };
    return {
      voucherTemplateOptions,
      voucherTemplateName,
      filesUpload,
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
</style>
