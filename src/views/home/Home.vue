<template>
  <div class="home-selector">
    <!-- 主页 -->
    <div class="div-inline">
      <router-link to="/Home/Welcome">WELL</router-link>
    </div>
    <div class="div-inline separator-margin">|</div>
    <!-- 主功能区 -->
    <div class="div-inline">
      <router-link to="/home/menuselector">Main</router-link>
    </div>
    <div class="div-inline separator-margin">|</div>
    <!-- 联系页 -->
    <div class="div-inline">
      <router-link to="/home/about">About</router-link>
    </div>
  </div>

  <!-- 分割线 -->
  <div class="#">
    <el-divider class="divider-line">
      <div class="#"><i class="el-icon-s-promotion"></i></div>
    </el-divider>
  </div>

  <!-- 为router-view设置elementplus过度动画 -->
  <router-view v-slot="{ Component }">
    <transition name="el-zoom-in-top" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="less">
.home-selector {
  text-align: center;
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
  // text-align: center;
}
.separator-margin {
  padding-right: 15px;
  padding-left: 15px;
}
.divider-line {
  margin-top: 15px !important;
  margin-bottom: 15px !important;
}

.el-divider__text {
  background-color: inherit;
  // color: inherit
}
</style>
