<template>
  <div>登录页面</div>
  <button @click="loginResponse">Login</button>
  <h2>{{ tempRef }}</h2>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { login } from "@/utils/lostelkAPI/login";

export default defineComponent({
  //   name: '',
  //   props: {
  //   },
  //   components: {
  //   },

  setup() {
    let userData = { username: "root", password: "123456" };
    // let data = { username: "root", password: "123456" };
    let tempRef: any = ref("log");
    let loginResponse = () => {
      login(userData)
        .then((res) => {
          tempRef.value = res;
          console.log(res);
        })
        .catch((err) => {
          return;
        });
    };
    return {
      userData,
      tempRef,
      loginResponse,
    };
  },
});
</script>

<style scoped lang="less"></style>
