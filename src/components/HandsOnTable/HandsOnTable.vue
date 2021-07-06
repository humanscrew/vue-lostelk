<template>
  <!-- <div>HandsOnTable</div> -->
  <div
    id="el-handsontable"
    style="width: 100%; height: 100%; overflow-y: hidden; overflow-x: hidden"
  ></div>
</template>

<script>
export default {
  name: "HandsOnTable",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let data = [
        ["", "Ford", "Tesla", "Toyota", "Honda"],
        ["2017", 10, 11, 12, 15400],
        ["2018", 20, 11, 14, 13],
        ["2019", 30, 15, 12, 13],
      ];
      let handsOnTableMount = document.getElementById("el-handsontable");
      /* eslint-disable */
      let handsOnTableSetting = {
        data: data,
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
      Handsontable(handsOnTableMount, handsOnTableSetting);
    },
  },
};
</script>

<style scoped>
@import "~../../../public/handsontable/handsontable.full.min.css";
#el-handsontable {
  height: auto;
}
</style>
