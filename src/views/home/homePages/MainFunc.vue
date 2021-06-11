<template>
  <div class="main-func">
    <div>主功能区</div>
    <!-- Space间距 -->
    <el-space wrap :size="50" style="margin: 50px">
      <div v-for="item in menuList" :key="item">
        <CardBox :funcList="item" />
      </div>
    </el-space>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import CardBox from "@/components/CardBox/index.vue";

export default defineComponent({
  name: "MainFunc",
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
.main-func {
  text-align: center;
}
</style>
