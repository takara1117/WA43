<script setup lang="ts">
import { ref } from "vue";
import { getWeatherInfo } from "@/apiAccess";

const weatherInfo = ref("未取得");
const doProcess = (): void => {
  const promise = getWeatherInfo();
  promise.then((result: string): void => {
    weatherInfo.value = result;
  });
};
</script>

<template>
  <p>{{ weatherInfo }}</p>
  <button v-on:click="doProcess">取得!</button>
</template>
