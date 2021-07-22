<template>
  <div>VoucherTemplate</div>
  <div v-for="(item, key) in voucherTemplate" :key="key">
    <el-input placeholder="请输入内容" v-model="voucherTemplate[key]">
      <template #prepend>{{ key }}</template>
    </el-input>
  </div>
  <div>{{ voucherTemplate }}</div>
  <div>{{ cashflowTemplate }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import _ from "lodash";

export default defineComponent({
  name: "VoucherTemplate",
  setup() {
    let store = useStore();
    let voucherTemplate = ref(
      _.cloneDeep(store.state.bookkeepingVoucherTemplate)
    );
    let cashflowTemplate = ref(
      _.cloneDeep(store.state.bookkeepingCashflowTemplate)
    );
    return {
      voucherTemplate,
      cashflowTemplate,
    };
  },
});
</script>
