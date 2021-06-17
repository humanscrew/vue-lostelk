<template>
  <sidebar
    :menuList="menuList"
    :username="username"
    :role="role"
    @isActive="getIsActive"
    @mainMenuIndex="getMainMenuIndex"
  ></sidebar>

  <div class="function-area" :class="{ active: sidebarActive }">
    <el-tabs tab-position="top" type="border-card" class="el-tabs-box">
      <el-tab-pane
        v-for="item in submenu"
        :key="item.name"
        :label="item.name"
        class="el-tab-pane"
        lazy
      >
        <!-- <router-view></router-view> -->
        <!-- <div class="text">测试</div> -->
        <div class="main-area">{{ item.name }}</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Sidebar from "@/components/Sidebar/Sidebar.vue";

export default defineComponent({
  name: "layout",
  //   props: {
  //   },
  components: {
    Sidebar,
  },
  setup() {
    let store = useStore();
    let menuList = computed(() => store.state.menuList);
    let username = computed(() => store.state.username);
    let role = computed(() => store.state.role);
    let sidebarActive = ref(false);
    let mainMenuIndex = ref(0);
    let submenu = computed(() => menuList.value[mainMenuIndex.value].children);
    let getIsActive = (isActive: boolean) => {
      sidebarActive.value = isActive;
    };
    let getMainMenuIndex = (index: number) => {
      mainMenuIndex.value = index;
    };
    return {
      menuList,
      username,
      role,
      sidebarActive,
      mainMenuIndex,
      submenu,
      getIsActive,
      getMainMenuIndex,
    };
  },
});
</script>

<style scoped lang="less">
.function-area {
  position: absolute;
  height: calc(100% - 20px);
  width: calc(100% - 78px - 20px);
  left: 78px;
  background: #e4e9f7;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2px);
  transition: all 0.5s ease;
  margin: 10px;
  transition: all 0.5s;
}

.function-area .text {
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  margin: 12px;
}

.active {
  width: calc(100% - 240px - 20px);
  left: 240px;
  transition: all 0.5s;
}

.el-tabs-box {
  height: 100%;
  &::v-deep .el-tabs__content {
    height: 100%;
    background: green;
    // overflow: scroll;
  }
}
.el-tab-pane {
  // height: 100%;
  // background: red;
}
</style>
