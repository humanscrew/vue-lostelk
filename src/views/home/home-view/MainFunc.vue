<template>
  <div class="main-func">
    <div>主功能区</div>
    <!-- Space间距 -->
    <el-space wrap :size="50" style="margin: 50px">
      <div v-for="item in funcList" :key="item">
        <CardBox :funcList="item" />
      </div>
    </el-space>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardBox from "@/components/CardBox/index.vue";

export default defineComponent({
  name: "MainFunc",
  //   props: {
  //   },
  components: {
    CardBox,
  },
  setup() {
    let funcList = [
      {
        name: "财务核算",
        children: [
          { name: "账务处理", path: "/func" },
          { name: "现金流量" },
          { name: "模式记账" },
          { name: "财务流" },
        ],
      },
      {
        name: "资金管理",
        children: [
          { name: "现金管理" },
          { name: "银行存款" },
          { name: "资金对账" },
          { name: "资金流" },
        ],
      },
      {
        name: "工作流",
        children: [
          { name: "对公拨款" },
          { name: "费用报销" },
          { name: "采购订单" },
          { name: "业务结转" },
        ],
      },
      {
        name: "资产管理",
        children: [
          { name: "固定资产" },
          { name: "无形资产" },
          { name: "长期待摊" },
          { name: "其他资产" },
        ],
      },
      {
        name: "进销存",
        children: [
          { name: "库存管理" },
          { name: "采购管理" },
          { name: "销售管理" },
          { name: "供应链" },
        ],
      },
    ];
    return {
      funcList,
    };
  },
});
</script>

<style scoped lang="less">
.main-func {
  text-align: center;
}
</style>
