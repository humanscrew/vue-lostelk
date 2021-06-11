<template>
  <el-tabs tab-position="top" type="border-card" @tab-click="tabClick">
    <el-tab-pane
      v-for="item in menuList[menuStIndex].children"
      :key="item.name"
      :label="item.name"
    >
      <router-view></router-view>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "FuncArea",
  setup() {
    let store = useStore();
    let route = useRoute();
    let router = useRouter();
    let menuList = computed(() => store.state.menuList);
    let menuStIndex = computed(() => route.meta.index);
    let tabClick = (tab: any) => {
      let stIndex = Number(menuStIndex.value);
      let menuNdIndex = tab.index;
      let ndPath = menuList.value[stIndex].children[menuNdIndex].path;
      router.push(ndPath);
    };
    return {
      menuList,
      menuStIndex,
      tabClick,
    };
  },
});
</script>
