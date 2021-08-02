<template>
  <!-- <div class="voucher-template-input-wrapper">
    <div v-for="(item, key) in voucherTemplate" :key="key">
      <el-input placeholder="请输入内容" v-model="voucherTemplate[key]">
        <template #prepend>{{ key }}</template>
      </el-input>
    </div>
  </div>-->
  <el-card body-style="padding: 5px" class="box-card">
    <template #header>
      <div class="card-header">
        <span class="el-card-label">记账凭证规则</span>
        <el-button :icon="handsOnTableSettingVoucher.readOnly ? 'el-icon-edit' : 'el-icon-finished'" @click="handleTemplateEdit" circle size="small" type="danger"></el-button>
      </div>
    </template>
    <HandsOnTable :handsOnTableSetting="handsOnTableSettingVoucher" @refHandsOnTable="getRefHandsOnTableVoucher" class="handsontable"></HandsOnTable>
  </el-card>

  <br />

  <el-card body-style="padding: 5px" class="box-card">
    <template #header>
      <div class="card-header">
        <span class="el-card-label">现金流量规则</span>
        <el-button :icon="handsOnTableSettingCashFlow.readOnly ? 'el-icon-edit' : 'el-icon-finished'" @click="handleTemplateEdit" circle size="small" type="danger"></el-button>
      </div>
    </template>
    <HandsOnTable :handsOnTableSetting="handsOnTableSettingCashFlow" @refHandsOnTable="getRefHandsOnTableCashFlow" class="handsontable"></HandsOnTable>
  </el-card>

  <div class="sql-select-wrapper">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span class="el-card-label">SQL执行</span>
          <el-button @click="handleSQL" icon="el-icon-search" size="mini" type="primary">解析</el-button>
        </div>
      </template>
      <div>
        <el-input :autosize="{ minRows: 10, maxRows: 20 }" class="sql-input-textarea" placeholder="请输入SQL语句" type="textarea" v-model="sqlStatement"></el-input>
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span class="el-card-label">查询结果</span>
          <el-button icon="el-icon-copy-document" size="mini" type="primary">复制</el-button>
        </div>
      </template>
      <div>
        <el-input :autosize="{ minRows: 10, maxRows: 20 }" class="sql-input-textarea" type="textarea" v-model="sqlResult"></el-input>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import _ from "lodash";
import HandsOnTable from "@/components/HandsOnTable/HandsOnTable.vue";
import { defaultHandsOnTableSetting } from "@/components/HandsOnTable/handsOnTableSetting";
import { ElMessageBox, ElMessage } from "element-plus";
import { executeSQL } from "@/utils/lostelkAPI/executeSQL";

export default defineComponent({
  name: "VoucherTemplate",
  components: {
    HandsOnTable,
  },
  setup() {
    let store = useStore();
    let voucherTemplate = ref(_.cloneDeep(store.state.bookkeepingVoucherTemplate));
    let cashflowTemplate = ref(_.cloneDeep(store.state.bookkeepingCashflowTemplate));
    let voucherTemplateArray = computed(() => [Object.values(voucherTemplate.value)]);
    let cashFlowTemplateArray = computed(() => [Object.values(cashflowTemplate.value)]);
    let refHandsOnTableVoucher = ref();
    let getRefHandsOnTableVoucher = (refDom: any) => {
      refHandsOnTableVoucher.value = refDom;
    };
    let refHandsOnTableCashFlow = ref();
    let getRefHandsOnTableCashFlow = (refDom: any) => {
      refHandsOnTableCashFlow.value = refDom;
    };
    let handsOnTableSettingVoucher = ref(_.cloneDeep(defaultHandsOnTableSetting));
    let handsOnTableSettingCashFlow = ref(_.cloneDeep(defaultHandsOnTableSetting));
    // @ts-ignore
    handsOnTableSettingVoucher.value.colHeaders = Object.keys(voucherTemplate.value);
    handsOnTableSettingVoucher.value.readOnly = true;
    handsOnTableSettingVoucher.value.dropdownMenu = false;
    handsOnTableSettingVoucher.value.data = voucherTemplateArray.value;
    // @ts-ignore
    handsOnTableSettingCashFlow.value.colHeaders = Object.keys(cashflowTemplate.value);
    handsOnTableSettingCashFlow.value.readOnly = true;
    handsOnTableSettingCashFlow.value.dropdownMenu = false;
    handsOnTableSettingCashFlow.value.data = cashFlowTemplateArray.value;
    let handleTemplateEdit = () => {
      if (!handsOnTableSettingVoucher.value.readOnly) {
        ElMessage({
          type: "info",
          message: `已退出修改状态！`,
        });
        handsOnTableSettingVoucher.value.readOnly = true;
        handsOnTableSettingCashFlow.value.readOnly = true;
        return;
      }
      ElMessageBox.prompt("Access Code : use SQL to fill voucher data from local database", "规则维护", {
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
        // inputType: "password",
        inputPlaceholder: "请输入权限码",
      })
        .then(() => {
          handsOnTableSettingVoucher.value.readOnly = false;
          handsOnTableSettingCashFlow.value.readOnly = false;
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
    let sqlStatement = ref<string>();
    let sqlResult = ref();
    let handleSQL = async () => {
      if (handsOnTableSettingVoucher.value.readOnly) {
        handleTemplateEdit();
      } else {
        sqlResult.value = "";
        let res = await executeSQL({
          sql: sqlStatement.value?.toString(),
        });
        sqlResult.value = JSON.stringify(res.data.data);
      }
    };
    return {
      getRefHandsOnTableVoucher,
      getRefHandsOnTableCashFlow,
      handsOnTableSettingVoucher,
      handsOnTableSettingCashFlow,
      handleTemplateEdit,
      sqlStatement,
      sqlResult,
      handleSQL,
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
.card-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
::v-deep(.el-card__header) {
  padding: 10px;
}
.el-card-label {
  font-weight: bold;
  border-left: 3px solid #409eff;
  padding-left: 5px;
}
.box-card {
  border: 1px solid rgba(200, 200, 200, 0.7);
}
.sql-select-wrapper {
  text-align: center;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 50%);
  margin-top: 20px;
}
</style>
