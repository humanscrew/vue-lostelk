<template>
  <div class="greet">
    <div class="div-earth-img">
      <img
        alt="github earth img"
        src="~@/assets/imgs/githubEarthIMG.jpg"
        class="github-earth-img"
      />
    </div>
    <h1 class="welcome-greet-words">{{ greetMsg }}</h1>
    <!-- <h1>Love in the Time of Cholera</h1> -->
    <h3 class="words-to-lostelk">
      En adelanto van estos lugares : ya tienen su diosa coronada.
    </h3>
    <p class="contact-link">
      Here is a
      <a
        href="https://www.bilibili.com/video/BV1Gz4y197E9"
        target="_blank"
        rel="noopener"
        >link</a
      >
      .
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Greet",
  props: {
    greetMsg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/assets/css/fonts.css";
.greet {
  font-family: kausha;
}
h1,
h3,
p {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.div-earth-img {
  margin-top: 20px;
}
// 设置图片格式
img.github-earth-img {
  max-width: 20%;
  height: auto;
}

// 引入自定义字体格式
// @import "~@/assets/css/fonts.css";
.welcome-greet-words {
  font-size: 50px;
}
.contact-link {
  font-size: 20px;
}
</style>
