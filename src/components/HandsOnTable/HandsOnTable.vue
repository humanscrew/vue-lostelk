<template>
  <div ref="refHandsOnTable"></div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "HandsOnTable",
  setup() {
    let refHandsOnTable = ref();
    let handsOnTableData = [
      ["T", "Ford", "Tesla", "Toyota", "Honda"],
      ["2017", 10, 11, 12, 25],
      ["2018", 20, 11, 14, 13],
      ["2019", 30, 15, 12, 13],
    ];
    let handsOnTableSetting = {
      data: handsOnTableData,
      // rowHeaders: true,
      // colHeaders: true,
      filters: true,
      // dropdownMenu: true,
      // manualColumnMove: true, //是否能拖动列
      manualColumnResize: true,
      // manualRowMove: true,
      manualRowResize: true,
      manualColumnFreeze: true,
      search: true,
      contextMenu: true, //右键显示更多功能,
      autoColumnSize: true,
      language: "zh-CN",
      licenseKey: "non-commercial-and-evaluation",
    };
    let creatHandsOnTable = () => {
      // let handsOnTableMount = document.getElementById("el-handsontable");
      /* eslint-disable */
      Handsontable(refHandsOnTable.value, handsOnTableSetting);
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
#el-handsontable {
  height: auto;
}
</style>
