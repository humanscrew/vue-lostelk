<template>
  <div class="main-func">
    <div>主功能区</div>
    <!-- layout布局 -->
    <div class="div-layout">
      <el-row :gutter="14" type="flex" justify="space-around" class="row-bg">
        <el-col :xs="24" :sm="12" :md="12" :lg="4" :xl="2">
          <div class="grid-content bg-purple-light">
            <CardBox :funcList="funcList[0]" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="4" :xl="2">
          <div class="grid-content bg-purple-light">
            <CardBox :funcList="funcList[1]" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="4" :xl="2">
          <div class="grid-content bg-purple-light grid-content-last-but-one">
            <CardBox :funcList="funcList[2]" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="4" :xl="2">
          <div class="grid-content bg-purple-light grid-content-last">
            <CardBox :funcList="funcList[3]" />
          </div>
        </el-col>
      </el-row>
    </div>
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
.div-layout {
  margin: 10px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  // margin-bottom: 20px;
}
.row-bg {
  padding: 10px 0;
  // background-color: #f9fafc;
}
@media screen and (max-width: 768px) {
  .grid-content {
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 70%;
  }
  .grid-content-last {
    margin-bottom: 0px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1200px) {
  .grid-content {
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 70%;
  }
  .grid-content-last,
  .grid-content-last-but-one {
    margin-bottom: 0px;
  }
}
</style>
