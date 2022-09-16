<script setup lang="ts">
import { ref } from "vue";
import { getMsg } from "@/functions";

const statTimeStr = ref("");
const msg = ref("");
const endShowMsgTime = ref("");
const endTimeStr = ref("");

const doProcess = (): void => {
  const startTime = new Date();
  statTimeStr.value = `${startTime.toLocaleTimeString()}${startTime.getMilliseconds()}`;
  const promise = getMsg();
  promise.then((result: string): void => {
    msg.value = result;
    const endShowMsg = new Date();
    endShowMsgTime.value = `${endShowMsg.toLocaleTimeString()}${endShowMsg.getMilliseconds()}`;
  });
  const endTime = new Date();
  endTimeStr.value = `${endTime.toLocaleTimeString()} ${endTime.getMilliseconds()}`;
};
</script>

<template>
  <p>処理開始時刻: {{ statTimeStr }}</p>
  <p>結果メッセージ: {{ msg }}</p>
  <p>結果メッセージ終了時刻: {{ endShowMsgTime }}</p>
  <p>処理終了時刻: {{ endTimeStr }}</p>
  <p>
    <button v-on:click="doProcess">処理開始!</button>
  </p>
</template>
