<template>
  <div class="card-root-div">
    <el-card class="card-box hvr-back-pulse" shadow="always">
      <template #header>
        <div class="card-header">
          <div class="card-header-name">{{ cardList.name }}</div>
          <el-button icon="el-icon-search" circle type="primary" plain size="small"></el-button>
          <!-- 加载状态 => :loading="true" -->
        </div>
      </template>
      <div v-for="item in cardList.children" :key="item" class="card-box-item">
        <div class="card-box-item-text hvr-bounce-to-right" @click="routerPush(item.path)">
          {{ item.name }}
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CardBox",
  props: {
    cardList: Object,
  },
  components: {},
  setup() {
    let router = useRouter();
    let routerPush = (path: string) => {
      if (path) {
        router.push({ path });
      }
    };
    return {
      routerPush,
    };
  },
});
</script>

<style scoped lang="less">
.card-root-div {
  min-width: 230px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-box {
  width: 228px;
}
.card-box-item-text {
  padding: 6px;
  margin: 4px;
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

// /* Back Pulse */
// @keyframes hvr-back-pulse {
//   50% {
//     opacity: 0.7;
//   }
// }
// .hvr-back-pulse {
//   vertical-align: middle;
//   position: relative;
// }
// .hvr-back-pulse:hover,
// .hvr-back-pulse:focus,
// .hvr-back-pulse:active {
//   animation-name: hvr-back-pulse;
//   animation-duration: 3s;
//   animation-delay: 0.6s;
//   animation-timing-function: ease-in-out;
//   animation-iteration-count: infinite;
// }

// /* Ripple Out */
// @keyframes hvr-ripple-out {
//   50% {
//     top: -10px;
//     right: -10px;
//     bottom: -10px;
//     left: -10px;
//     opacity: 0.6;
//   }
//   100% {
//     top: -20px;
//     right: -20px;
//     bottom: -20px;
//     left: -20px;
//     opacity: 0;
//   }
// }
// .hvr-ripple-out {
//   vertical-align: middle;
//   transform: perspective(1px) translateZ(0);
//   box-shadow: 0 0 1px rgba(0, 0, 0, 0);
//   position: relative;
// }
// .hvr-ripple-out:before {
//   content: "";
//   position: absolute;
//   border: #e1e1e1 solid 6px;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   opacity: 0;
// }
// .hvr-ripple-out:hover:before,
// .hvr-ripple-out:focus:before,
// .hvr-ripple-out:active:before {
//   animation-name: hvr-ripple-out;
//   animation-iteration-count: infinite;
//   animation-duration: 1.2s;
//   animation-timing-function: linear;
//   // animation-direction: alternate;
// }

/* Bounce To Right */
.hvr-bounce-to-right {
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.5s;
}
.hvr-bounce-to-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to right, #757f9a 0%, #d7dde8 51%);
  border-top: 1px solid rgba(200, 200, 200, 0.25);
  border-right: 1px solid rgba(200, 200, 200, 1);
  border-bottom: 1px solid rgba(200, 200, 200, 0.75);
  border-left: 1px solid rgba(200, 200, 200, 1);
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition-property: transform;
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}
.hvr-bounce-to-right:hover,
.hvr-bounce-to-right:focus,
.hvr-bounce-to-right:active {
  color: black;
  // color: #01FF70
}
.hvr-bounce-to-right:hover:before,
.hvr-bounce-to-right:focus:before,
.hvr-bounce-to-right:active:before {
  transform: scaleX(1);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
</style>
