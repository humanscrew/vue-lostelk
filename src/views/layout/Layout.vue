<template>
  <sidebar
    :menuList="menuList"
    :username="username"
    :role="role"
    @isActive="getIsActive"
    @mainMenuIndex="getMainMenuIndex"
  ></sidebar>

  <div class="function-area" :class="{ active: sidebarActive }">
    <el-tabs
      tab-position="top"
      type="border-card"
      class="el-tabs-box"
      v-model="tabName"
      @tab-click="handleTabClick"
    >
      <el-tab-pane
        v-for="item in submenu"
        :key="item.name"
        :label="item.name"
        :name="item.name"
        class="el-tab-pane"
        :disabled="!item.path"
        lazy
      >
        <el-scrollbar max-height="calc(100vh - 20px - 39px - 20px)" noresize>
          <!-- <div class="main-area" v-for="itemNd in Array(100)" :key="itemNd">
            {{ item.name }}
          </div> -->
          <router-view></router-view>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Sidebar from "@/components/Sidebar/Sidebar.vue";

export default defineComponent({
  name: "layout",
  //   props: {
  //   },
  components: {
    Sidebar,
  },
  setup() {
    let router = useRouter();
    let route = useRoute();
    let store = useStore();
    let menuList = computed(() => store.state.menuList);
    let username = computed(() => store.state.username);
    let role = computed(() => store.state.role);
    let sidebarActive = ref(false);
    let mainMenuIndex = ref(route.meta.mainMenuIndex);
    let submenu = computed(
      () => menuList.value[mainMenuIndex.value as number].children
    );
    let tabName = ref(submenu.value[route.meta.submenuIndex as number].name);
    let getIsActive = (isActive: boolean) => {
      sidebarActive.value = isActive;
    };
    let getMainMenuIndex = (index: number) => {
      mainMenuIndex.value = index;
      let submenuPath = submenu.value[0].path;
      if (submenuPath) {
        tabName.value = submenu.value[0].name;
        router.push(submenuPath);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let handleTabClick = (tab: any) => {
      let submenuPath = submenu.value[tab.index].path;
      if (submenuPath) {
        router.push(submenuPath);
      }
    };
    return {
      menuList,
      username,
      role,
      sidebarActive,
      mainMenuIndex,
      submenu,
      tabName,
      getIsActive,
      getMainMenuIndex,
      handleTabClick,
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

.active {
  width: calc(100% - 240px - 20px);
  left: 240px;
  transition: all 0.5s;
}

::v-deep(.el-tabs__content) {
  height: calc(100vh - 20px - 39px - 20px);
  padding: 10px;
}
</style>
