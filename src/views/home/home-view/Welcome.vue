<template>
  <div class="welcome">
    <Greet :greetMsg="greetMsg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Greet from "@/components/Greet/Greet.vue"; // @ is an alias to /src

export default defineComponent({
  name: "welcome",
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

<style scoped lang="less">
.welcome {
  text-align: center;
}
</style>
