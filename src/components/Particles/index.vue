<template>
  <div id="particles-container">
    <h1>测试</h1>
    <div class="login-container"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  //   name: "",
  //   //   props: {},
  //   //   components: {},
  //   setup(props, ctx: SetupContext) {
  //     return {};
  //   },
  mounted() {
    // window.particlesJS("particles-container", particle);
  },
});
</script>

<style scoped lang="less">
#particles-container {
  width: 100%;
  height: 100%;
  position: relative;
  // background-image: url(../images/bg.jpg);
  background-color: blue;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
}
</style>
