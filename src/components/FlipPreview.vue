<template>
  <h1>3 World places to visit this new year</h1>
  <div class="wrapper">
    <div class="container" id="c0">
      <div class="image" id="i0">
        <div class="city">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 300 225"
            style="enable-background: new 0 0 300 225"
            xml:space="preserve"
          >
            <ellipse
              class="st4"
              id="sh1"
              cx="170.5"
              cy="124.75"
              rx="37.5"
              ry="37.5"
            />
            <ellipse
              id="XMLID_15_"
              class="st4"
              cx="170.5"
              cy="124.75"
              rx="27.5"
              ry="27.5"
            />

            <polygon
              id="XMLID_1_"
              class="st2"
              points="-0.301,224.5 74.849,149.5 150,224.5 "
            />
            <polygon
              id="XMLID_2_"
              class="st0"
              points="108,224.5 74.849,149.5 150,224.5 "
            />
            <polygon
              id="XMLID_4_"
              class="st2"
              points="207.256,225.5 253.849,179 300.443,225.5 "
            />
            <polygon
              id="XMLID_3_"
              class="st0"
              points="274.403,225.5 253.849,179 300.443,225.5 "
            />
            <line
              id="XMLID_5_"
              class="st1"
              x1="179"
              y1="202"
              x2="179"
              y2="226"
            />
            <line
              id="XMLID_6_"
              class="st1"
              x1="179"
              y1="207"
              x2="190"
              y2="207"
            />
            <line
              id="XMLID_7_"
              class="st1"
              x1="172"
              y1="214"
              x2="180"
              y2="214"
            />
            <line
              id="XMLID_8_"
              class="st1"
              x1="190"
              y1="202"
              x2="190"
              y2="207"
            />
            <line
              id="XMLID_9_"
              class="st1"
              x1="172"
              y1="207"
              x2="172"
              y2="214"
            />
            <circle id="XMLID_10_" class="st3" cx="87.5" cy="98.5" r="1.5" />
            <circle id="XMLID_11_" class="st3" cx="24.5" cy="68.5" r="2.5" />
            <circle id="XMLID_12_" class="st3" cx="219.5" cy="18.5" r="1.5" />
            <circle id="XMLID_13_" class="st3" cx="272.5" cy="03.5" r="2.0" />
            <circle id="XMLID_14_" class="st3" cx="144.5" cy="12.5" r="1.0" />
            <circle id="XMLID_10_" class="st3" cx="107.5" cy="328.5" r="1.5" />
            <circle id="XMLID_11_" class="st3" cx="24.5" cy="58.5" r="2.5" />
            <circle id="XMLID_12_" class="st3" cx="19.5" cy="128.5" r="1.5" />
            <circle id="XMLID_13_" class="st3" cx="72.5" cy="113.5" r="2.0" />
            <circle id="XMLID_14_" class="st3" cx="174.5" cy="92.5" r="1.0" />
          </svg>
        </div>
      </div>
      <div class="story" id="s0">
        <div class="info">
          <h3>Pyramids</h3>
          <p>
            Built during a time when Egypt was one of the richest and most
            powerful civilizations in the world. Their massive scale reflects
            the unique role that the pharaoh played in ancient Egyptian society.
          </p>
        </div>
      </div>
    </div>

    <div class="page">
      <h4>Hover the card</h4>
      <ul>
        <li>&lt;&lt;&lt;</li>
        <li>>>></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// interface Data {}

export default defineComponent({
  name: "FlipPreview",
  //   props: {},
  //   components: {},

  //   setup(props, ctx: SetupContext) {
  //     let data: Data = reactive<Data>({});
  //     return {
  //       ...toRefs(data),
  //     };
  //   },
});
</script>

<style scoped lang="less">
// @import url("https://fonts.googleapis.com/css?family=Raleway:200");
body {
  font-family: "Raleway", sans-serif;
  background: #eee;
}

.wrapper {
  position: absolute;
  top: 10%;
  left: 40%;
  width: 300px;
  height: 500px;
  perspective: 900px;
}

.container {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  transition: 0.5s all ease;
  transform: rotateX(60deg) scale(0.7);
  perspective: 900px;
  box-shadow: 0px 20px 50px #555;
  animation: entry 1s linear 1;
}

#c0 {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #eba65b 30%, #d99267 100%);
  z-index: 300;
  box-shadow: 0px 20px 100px #555;
}

#c1 {
  background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
  box-shadow: 0px 20px 100px #555;
  left: 100%;
  z-index: 0;
}

#c2 {
  left: -100%;
  z-index: 0;
  background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
  box-shadow: 0px 20px 100px #555;
}

.container:hover {
  cursor: pointer;
  transform: rotate(0deg) scale(1) translateY(10px);
  transition: 0.5s all ease;
  z-index: 400;
}

.image {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 45%;
  background: linear-gradient(to top, #eba65b 30%, #d99267 100%);
}

#i1 {
  background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
}

#i2 {
  background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
}

span {
  position: absolute;
  top: 0%;
  left: 55%;
  border-radius: 100%;
  background-color: #fff;
  z-index: 10;
}

.sun {
  position: absolute;
  top: 50%;
  height: 50%;
  left: 0%;
  width: 100%;
}

.sun1 {
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 10px #fff;
}

.st4 {
  fill: #f8c56f;
  opacity: 1;
}

.st5,
.st7 {
  fill: #fff;
}

#sh2 {
  opacity: 0.5;
}

#sh3 {
  opacity: 0.3;
}

.st6 {
  fill: #59476f;
}

.st10 {
  fill: #c5a7e5;
  stroke: #222;
}

.st11 {
  stroke: #212121;
  opacity: 0.5;
}

#sh1 {
  fill: #f8c56f;
  opacity: 0.4;
}

.st0 {
  fill: #a25a62;
  stroke: none;
  stroke-miterlimit: 10;
}

.st1 {
  fill: none;
  stroke: #a25a62;
  stroke-width: 2;
  stroke-miterlimit: 10;
}

.st2 {
  fill: #cd775c;
}

.st3 {
  fill: #fff;
  opacity: 0.3;
}

.story {
  position: absolute;
  top: 45%;
  left: 0%;
  height: 55%;
  width: 100%;
  background: linear-gradient(to bottom, #eba65b 0%, #d99267 40%);
  z-index: 30;
}

#s1 {
  background: linear-gradient(to top, #5b62a2 0%, #7b88d1 100%);
}

#s2 {
  background: linear-gradient(to top, #5b62a2 0%, #7b88d1 120%);
}

.info {
  position: absolute;
  top: 10%;
}

h3 {
  text-align: center;
  text-shadow: 0px 0px 10px #eee;
  color: #eee;
  letter-spacing: 2px;
}

h4 {
  color: #111;
  position: absolute;
  top: 30%;
  left: 30%;
  letter-spacing: 2px;
}

h1 {
  color: #111;
  position: fixed;
  top: 0%;
  left: 30%;
  letter-spacing: 2px;
}

p {
  font-size: 14px;
  color: #fff;
  padding: 0px 20px 20px 20px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 1px;
}

.page {
  position: absolute;
  top: 80%;
  width: 100%;
  left: 0%;
  height: 20%;
  z-index: 30;
}

li {
  position: absolute;
  top: 50%;
  list-style: none;
  color: #111;
}

li:nth-child(1) {
  left: 15%;
  animation: simple1 1s linear infinite;
}

li:nth-child(2) {
  right: 15%;
  animation: simple 1s linear infinite;
}

@keyframes simple {
  50% {
    transform: translateX(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
}

@keyframes simple1 {
  50% {
    transform: translateX(-10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes entry {
  0% {
    top: -20%;
    opacity: 0.1;
  }
  100% {
    top: 0%;
  }
}
</style>
