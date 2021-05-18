<template>
  <div class="hvr-grow-shadow">
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">
          <span class="text-scale">卡片名称</span>
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
      <div
        v-for="o in 4"
        :key="o"
        class="box-card-text box-card-item text-scale"
      >
        {{ "列表内容 " + o }}
      </div>
    </el-card>
  </div>
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
  font-size: auto;
}
.box-card-item {
  margin-bottom: 18px;
}
.box-card {
  width: auto;
}

/* Grow Shadow */
.hvr-grow-shadow {
  // display: inline-block;
  // vertical-align: middle;
  // -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  // -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  // transition-timing-function: ease-in-out;
  // -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.hvr-grow-shadow:hover,
.hvr-grow-shadow:focus,
.hvr-grow-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  // -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
