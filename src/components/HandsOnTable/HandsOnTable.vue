<template>
  <div class="handsontable-wrapper">
    <div ref="refHandsOnTable"></div>
  </div>
</template>

<script>
/* eslint-disable */
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import _ from "lodash";
export default defineComponent({
  name: "HandsOnTable",
  props: {
    handsOnTableSetting: Object,
  },
  setup(props, { emit }) {
    let refHandsOnTable = ref();
    let hot;
    let handsOnTableSetting = computed(() => props.handsOnTableSetting);
    let creatHandsOnTable = () => {
      // let handsOnTableMount = document.getElementById("el-handsontable");
      handsOnTableSetting.value.licenseKey = "non-commercial-and-evaluation";
      hot = Handsontable(refHandsOnTable.value, handsOnTableSetting.value);
    };
    onMounted(() => {
      creatHandsOnTable();
      emit("refHandsOnTable", refHandsOnTable.value);
    });
    watch(
      () => _.cloneDeep(props.handsOnTableSetting),
      (newValues, prevValues) => {
        hot.updateSettings(props.handsOnTableSetting);
        // hot.loadData(props.handsOnTableSetting.data);
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
