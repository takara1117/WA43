<script setup lang="ts">
import { ref } from "vue";

const randValue = ref("まだです");
const onButtonClick = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue.value = String(rand);
};

const mousePointerX = ref(0);
const mousePointerY = ref(0);
const onImgMousemove = (event: MouseEvent): void => {
  mousePointerX.value = event.offsetX;
  mousePointerY.value = event.offsetY;
};

const pBgColor = ref("white");
const onPClick = (bgColor: string): void => {
  pBgColor.value = bgColor;
};

const pMsg = ref("イベント前(ここをクリック!)");
const pBgColorEvent = ref("white");
const onPClickWithEvent = (bgColor: string, event: MouseEvent): void => {
  pBgColorEvent.value = bgColor;
  pMsg.value = event.timeStamp.toString();
};

const msg = ref("未送信");
const onFormSubmit = (): void => {
  msg.value = "送信されました。";
};
</script>

<template>
  <section>
    <button v-on:click="onButtonClick">クリック!</button>
    <p>クリックの結果: {{ randValue }}</p>
  </section>
  <section>
    <img
      src="./assets/logo.svg"
      alt="Vueのロゴ"
      width="200"
      v-on:mousemove="onImgMousemove"
    />
    <p>ポインタの位置: x={{ mousePointerX }}; y={{ mousePointerY }}</p>
  </section>
  <p v-on:click="onPClick('red')" v-bind:style="{ backgroundColor: pBgColor }">
    ここをクリックすると背景色が変わります。
  </p>
  <p
    v-on:click="onPClickWithEvent('green', $event)"
    v-bind:style="{ backgroundColor: pBgColorEvent }"
  >
    {{ pMsg }}
  </p>
  <form action="#" v-on:submit.prevent="onFormSubmit">
    <input type="text" required />
    <button type="submit">送信</button>
  </form>
  <p>{{ msg }}</p>
</template>
