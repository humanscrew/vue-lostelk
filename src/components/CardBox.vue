<template>
  <div class="hvr-ripple-out">
    <el-card class="box-card hvr-back-pulse" shadow="always">
      <template #header>
        <div class="card-header">
          <div class="card-header-name">卡片名称</div>
          <el-button
            icon="el-icon-search"
            circle
            type="primary"
            plain
            size="small"
          ></el-button>
          <!-- 加载状态 => :loading="true" -->
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="box-card-text box-card-item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardBox",
  props: {},
  components: {},

  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// .box-card-text {
//   font-size: auto;
// }
.box-card-item {
  padding: 10px;
}
.box-card {
  width: auto;
}

// /* Grow Shadow */
// .hvr-grow-shadow {
//   // display: inline-block;
//   // vertical-align: middle;
//   // -webkit-transform: perspective(1px) translateZ(0);
//   transform: perspective(1px) translateZ(0);
//   box-shadow: 0 0 1px rgba(0, 0, 0, 0);
//   // -webkit-transition-duration: 0.3s;
//   transition-duration: 0.3s;
//   // transition-timing-function: ease-in-out;
//   // -webkit-transition-property: box-shadow, transform;
//   transition-property: box-shadow, transform;
// }
// .hvr-grow-shadow:hover,
// .hvr-grow-shadow:focus,
// .hvr-grow-shadow:active {
//   box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
//   // -webkit-transform: scale(1.1);
//   transform: scale(1.1);
// }

/* Back Pulse */
@keyframes hvr-back-pulse {
  50% {
    opacity: 0.7;
  }
}
.hvr-back-pulse {
  // display: inline-block;
  vertical-align: middle;
  position: relative;
}
.hvr-back-pulse:hover,
.hvr-back-pulse:focus,
.hvr-back-pulse:active {
  animation-name: hvr-back-pulse;
  animation-duration: 1s;
  animation-delay: 0.6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

/* Ripple Out */
@keyframes hvr-ripple-out {
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
}
.hvr-ripple-out {
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
}
.hvr-ripple-out:before {
  content: "";
  position: absolute;
  border: #e1e1e1 solid 6px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation-duration: 1s;
}
.hvr-ripple-out:hover:before,
.hvr-ripple-out:focus:before,
.hvr-ripple-out:active:before {
  animation-name: hvr-ripple-out;
  animation-iteration-count: infinite;
}
</style>
