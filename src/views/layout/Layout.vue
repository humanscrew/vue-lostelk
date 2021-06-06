<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="{ width: 'auto' }">
        <div @click="isAsideShow(isCollapse)" class="is-aside-show-box">
          <div v-show="isCollapse" class="el-icon-d-arrow-left"></div>
          <div v-show="!isCollapse" class="el-icon-d-arrow-right"></div>
        </div>

        <el-menu
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @select="handleSelect"
        >
          <div v-for="(item, index) in menuList" :key="item.name">
            <el-menu-item :index="index.toString()">
              <i :class="item.icon"></i>
              <template #title>
                <span>{{ item.name }}</span>
              </template>
            </el-menu-item>
          </div>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header height="auto"> </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="auto">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  //   name: '',
  //   props: {
  //   },
  //   components: {
  //   },
  setup() {
    let store = useStore();
    let router = useRouter();
    let menuList = computed(() => store.state.menuList);
    let isCollapse = ref(true);
    let isAsideShow = () => {
      isCollapse.value = !isCollapse.value;
    };
    let handleSelect = (index: number) => {
      router.push(`${menuList.value[index].path}`);
    };
    return {
      menuList,
      isCollapse,
      isAsideShow,
      handleSelect,
    };
  },
});
</script>

<style scoped lang="less">
.common-layout {
  width: 100vw;
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  // line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100vh;
  // padding-top: 5%;
  //   line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 80vh;
  //   line-height: 160px;
}

.is-aside-show-box {
  font-size: 130%;
  width: 100%;
  &:hover {
    color: #409eff;
  }
}
</style>
