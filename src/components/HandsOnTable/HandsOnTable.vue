<template>
  <!-- <div>HandsOnTable</div> -->
  <div id="example"></div>
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
        ["2017", 10, 11, 12, 130000],
        ["2018", 20, 11, 14, 13],
        ["2019", 30, 15, 12, 13],
      ];
      let container = document.getElementById("example");
      /* eslint-disable */
      let hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        dropdownMenu: true,
        licenseKey: "non-commercial-and-evaluation",
      });
    },
  },
};
</script>
