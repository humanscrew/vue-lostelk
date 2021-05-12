<template>
  <div id="nav">
    <!-- 主页 -->
    <div class="div-inline">
      <router-link to="/home/welcome">Well</router-link>
    </div>
    <div class="div-inline separator-margin">|</div>
    <!-- 主功能区 -->
    <div class="div-inline">
      <router-link to="/home/MainFunc">Main</router-link>
    </div>
    <div class="div-inline separator-margin">|</div>
    <!-- 联系页 -->
    <div class="div-inline">
      <router-link to="/home/about">About</router-link>
    </div>
  </div>

  <!-- 分割线 -->
  <div>
    <el-divider class="divider-line">
      <i class="el-icon-s-promotion"></i>
    </el-divider>
  </div>

  <!-- 滚动条 -->
  <el-scrollbar>
    <!-- 为router-view设置elementplus过度动画 -->
    <router-view v-slot="{ Component }">
      <transition name="el-zoom-in-top" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </el-scrollbar>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  // setup() {
  //   return { };
  // },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.div-inline {
  display: inline-block;
}
.separator-margin {
  margin-right: 15px;
  margin-left: 15px;
}
.divider-line {
  margin-top: 15px !important;
  margin-bottom: 15px !important;
}
</style>
