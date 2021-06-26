<template>
  <div class="menu-selector-box">
    <div class="menu-selector">
      <div v-for="item in menuList" :key="item" class="menu-selector-item">
        <CardBox :cardList="item" />
      </div>
    </div>
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
  // display: flex;
  // flex-wrap: wrap;
  // // align-items: center;
  // align-content: space-around;
  // // justify-content: flex-start;
  // justify-content: center;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 30px 30px;
  margin: 20px;
}
</style>
