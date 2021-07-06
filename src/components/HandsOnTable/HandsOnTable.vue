<template>
  <div class="handsontable-wrapper">
    <div ref="refHandsOnTable"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "HandsOnTable",
  props: {
    handsOnTableSetting: Object,
  },
  setup(props) {
    let refHandsOnTable = ref();
    let creatHandsOnTable = () => {
      // let handsOnTableMount = document.getElementById("el-handsontable");
      /* eslint-disable */
      Handsontable(refHandsOnTable.value, props.handsOnTableSetting);
    };
    onMounted(() => {
      creatHandsOnTable();
    });
    return {
      refHandsOnTable,
    };
  },
});
</script>

<style scoped>
@import "~../../../public/handsontable/handsontable.full.min.css";

::v-deep(.wtHolder) {
  height: 100% !important;
  width: 100% !important;
}
</style>
