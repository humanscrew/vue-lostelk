<template>
  <div>登录页面</div>
  <button @click="conslg">test http</button>
  <h1>{{ data }}</h1>
</template>

<script lang='ts'>
import { defineComponent, SetupContext, ref } from "vue";
import http from "@/plugins/http";

export default defineComponent({
  //   name: '',
  //   props: {
  //   },
  //   components: {
  //   },

  setup(props, ctx: SetupContext) {
    const data = ref("wait...");
    const conslg = () => {
      console.log("test");
      http({ url: "https://api.apiopen.top/getSingleJoke?sid=28654780" }).then(
        (res) => {
          console.log(res);
          data.value = res.data.result.text;
        }
      );
    };
    return {
      data,
      conslg,
    };
  },
});
</script>

<style scoped lang='less'>
</style>