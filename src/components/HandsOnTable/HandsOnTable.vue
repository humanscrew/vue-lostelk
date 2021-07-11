<template>
  <div class="handsontable-wrapper">
    <div ref="refHandsOnTable"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import _ from "lodash";
export default defineComponent({
  name: "HandsOnTable",
  props: {
    handsOnTableSetting: Object,
  },
  setup(props) {
    let refHandsOnTable = ref();
    let hot;
    let creatHandsOnTable = () => {
      // let handsOnTableMount = document.getElementById("el-handsontable");
      /* eslint-disable */
      props.handsOnTableSetting.licenseKey = "non-commercial-and-evaluation";
      hot = Handsontable(refHandsOnTable.value, props.handsOnTableSetting);
    };
    onMounted(() => {
      creatHandsOnTable();
      console.log(refHandsOnTable.value)
    });
    watch(
      () => _.cloneDeep(props.handsOnTableSetting),
      (newValues, prevValues) => {
        hot.loadData(props.handsOnTableSetting.data);
      },
      {
        // immediate: true,
        deep: true,
      }
    );
    return {
      refHandsOnTable,
    };
  },
});
</script>

<style scoped>
@import "~../../../public/handsontable/handsontable.full.min.css";
</style>
