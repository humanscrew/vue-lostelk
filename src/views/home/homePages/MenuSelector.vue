<template>
  <div class="menu-selector">
    <!-- Space间距 -->
    <el-space wrap :size="50" style="margin: 50px">
      <div v-for="item in menuList" :key="item">
        <CardBox :cardList="item" />
      </div>
    </el-space>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import CardBox from "@/components/CardBox/CardBox.vue";

export default defineComponent({
  name: "MenuSelector",
  components: {
    CardBox,
  },
  setup() {
    let store = useStore();
    let menuList = computed(() => store.state.menuList);
    return {
      menuList,
    };
  },
});
</script>

<style scoped lang="less">
.menu-selector {
  text-align: center;
}
</style>
