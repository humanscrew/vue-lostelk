<template>
  <el-card class="box-card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>卡片名称</span>
        <el-button
          icon="el-icon-search"
          circle
          type="primary"
          plain
          size="small"
        ></el-button>
        <!-- 加载状态 => :loading="true" -->
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="box-card-text box-card-item">
      {{ "列表内容 " + o }}
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardBox",
  props: {},
  components: {},

  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card-text {
  font-size: 14px;
}

.box-card-item {
  margin-bottom: 18px;
}

.box-card {
  width: auto;
}
</style>
