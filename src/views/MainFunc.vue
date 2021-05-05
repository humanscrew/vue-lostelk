<template>
  <div>
    <div>主功能区</div>
    <!-- layout布局 -->
    <div class="div-layout">
      <el-row :gutter="14" type="flex" justify="space-around" class="row-bg">
        <el-col :xs="24" :sm="12" :md="12" :lg="4" :xl="2">
          <div class="grid-content bg-purple-light">
            <CardBox />
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="4" :xl="2">
          <div class="grid-content bg-purple-light">
            <CardBox />
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="4" :xl="2">
          <div class="grid-content bg-purple-light grid-content-last-but-one">
            <CardBox />
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="4" :xl="2">
          <div class="grid-content bg-purple-light grid-content-last">
            <CardBox />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardBox from "@/components/CardBox.vue";

export default defineComponent({
  name: "MainFunc",
  //   props: {
  //   },
  components: {
    CardBox,
  },

  //   setup(props){
  //     let data: Data = reactive<Data>({})
  //     return {
  //       ...toRefs(data),
  //     }
  //   },
});
</script>

<style scoped lang="less">
.div-layout {
  margin: 10px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  // margin-bottom: 20px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
@media screen and (max-width: 768px) {
  .grid-content {
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 70%;
  }
  .grid-content-last {
    margin-bottom: 0px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1200px) {
  .grid-content {
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 70%;
  }
  .grid-content-last,
  .grid-content-last-but-one {
    margin-bottom: 0px;
  }
}
</style>
