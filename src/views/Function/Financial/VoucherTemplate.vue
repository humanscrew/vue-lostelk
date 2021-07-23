<template>
  <!-- <div class="voucher-template-input-wrapper">
    <div v-for="(item, key) in voucherTemplate" :key="key">
      <el-input placeholder="请输入内容" v-model="voucherTemplate[key]">
        <template #prepend>{{ key }}</template>
      </el-input>
    </div>
  </div> -->
  <el-card class="box-card" body-style="padding: 5px">
    <template #header>
      <div class="card-header">
        <span>记账凭证规则</span>
        <el-button
          :icon="
            handsOnTableSetting.readOnly ? 'el-icon-edit' : 'el-icon-finished'
          "
          circle
          type="primary"
          plain
          size="small"
          @click="handleTemplateEdit"
        ></el-button>
      </div>
    </template>
    <HandsOnTable
      :handsOnTableSetting="handsOnTableSetting"
      @refHandsOnTable="getRefHandsOnTable"
      class="handsontable"
    ></HandsOnTable>
  </el-card>
</template>

<script lang="ts">
/* eslint-disable */
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import _ from "lodash";
import HandsOnTable from "@/components/HandsOnTable/HandsOnTable.vue";
import { defaultHandsOnTableSetting } from "@/components/HandsOnTable/handsOnTableSetting";
import { ElMessageBox, ElMessage } from "element-plus";

export default defineComponent({
  name: "VoucherTemplate",
  components: {
    HandsOnTable,
  },
  setup() {
    let store = useStore();
    let voucherTemplate = ref(
      _.cloneDeep(store.state.bookkeepingVoucherTemplate)
    );
    let cashflowTemplate = ref(
      _.cloneDeep(store.state.bookkeepingCashflowTemplate)
    );
    let voucherTemplateArray = computed(() => [
      Object.values(voucherTemplate.value),
    ]);
    let refHandsOnTable = ref();
    let getRefHandsOnTable = (refDom: any) => {
      refHandsOnTable.value = refDom;
    };
    let handsOnTableSetting = ref(_.cloneDeep(defaultHandsOnTableSetting));
    // @ts-ignore
    handsOnTableSetting.value.colHeaders = Object.keys(voucherTemplate.value);
    handsOnTableSetting.value.readOnly = true;
    handsOnTableSetting.value.dropdownMenu = false;
    handsOnTableSetting.value.data = voucherTemplateArray.value;
    // handsOnTableSetting.value.autoColumnSize = false;
    let handleTemplateEdit = () => {
      if (!handsOnTableSetting.value.readOnly) {
        handsOnTableSetting.value.readOnly = true;
      }
      ElMessageBox.prompt(
        "Access Code : use SQL to fill voucher data from local database",
        "规则维护",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          // inputPattern:
          //   /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          // inputErrorMessage: "密码不正确",
          inputValidator: (value): string | boolean => {
            if (value === "123456") {
              return true;
            }
            return `权限未许可！请邮件联系tibetourist@gmail.com`;
          },
          inputType: "password",
          inputPlaceholder: "请输入权限码",
        }
      )
        .then(() => {
          handsOnTableSetting.value.readOnly =
            !handsOnTableSetting.value.readOnly;
          ElMessage({
            type: "warning",
            message: `请谨慎修改，以防SQL注入`,
          });
        })
        .catch(() => {
          // ElMessage({
          //   type: "info",
          //   message: "取消输入",
          // });
        });
    };
    return {
      voucherTemplate,
      cashflowTemplate,
      refHandsOnTable,
      getRefHandsOnTable,
      handsOnTableSetting,
      handleTemplateEdit,
    };
  },
});
</script>

<style scoped lang="less">
.voucher-template-input-wrapper {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 30px 30px;
  margin: 20px;
}
.handsontable {
  height: 80px;
  // width: calc(100% - 20px);
  overflow: hidden;
}
::v-deep(.card-header) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
::v-deep(.el-card__header) {
  padding: 10px;
}
</style>
