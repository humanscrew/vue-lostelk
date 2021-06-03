<template>
  <el-scrollbar max-height="100vh">
    <div class="router-view-box">
      <router-view />
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style src="@/static/css/normalize.css"></style>
<style lang="less">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
