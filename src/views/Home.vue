<template>
  <div class="home">
    <Greet :greetMsg="greetMsg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Greet from "@/components/Greet.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Greet,
  },
  setup() {
    let greetMsg = `Well Come !`;
    return {
      greetMsg,
    };
  },
});
</script>

<style scoped lang="less"></style>
