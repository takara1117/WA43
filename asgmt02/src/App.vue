<script setup lang="ts">
import { ref } from "vue";

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

const msg = ref("");
const onFormSubmit = (): void => {
  msg.value = "OK";
};
</script>

<template>
  <label>お名前</label><br />
  <input
    type="text"
    v-on:click="onPClickWithEvent('pink', $event)"
    v-bind:style="{ backgroundColor: pBgColorEvent }"
  />
  <p>{{ msg }}</p>
</template>
