<template>
  <div id="nav">
    <!-- 主页 -->
    <div class="div-inline">
      <router-link to="/">Home</router-link>
    </div>
    <div class="div-inline separator-margin">|</div>
    <!-- 主功能区 -->
    <div class="div-inline separator-margin">
      <router-link to="/MainFunc">Main</router-link>
    </div>
    <div class="div-inline separator-margin">|</div>
    <!-- 联系页 -->
    <div class="div-inline separator-margin">
      <router-link to="/about">About</router-link>
    </div>
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

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
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
  padding: 15px;

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
  margin-right: 10px;
  margin-left: 10px;
}
</style>
