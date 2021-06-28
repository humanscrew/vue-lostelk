<template>
  <div>HandsOnTable</div>
  <!-- <hot-table :data="data" :rowHeaders="true" :colHeaders="true"></hot-table> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { HotTable } from "@handsontable/vue";
export default defineComponent({
  name: "HandsOnTable",
  components: {
    // HotTable,
  },
  data: function () {
    return {
      data: [
        ["", "Ford", "Volvo", "Toyota", "Honda"],
        ["2016", 10, 11, 12, 13],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13],
      ],
    };
  },
  // setup() {},
});
</script>
