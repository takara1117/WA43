<script setup lang="ts">
import { ref } from "vue";
import { inject } from "vue";

import OneCity from "@/components/OneCity.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";

import type { City } from "@/interfaces";

const query = ref("");
const window = ref(false);

const cityList = inject("cityList") as Map<number, City>;

const doProcess = (q: string): void => {
  getWeatherInfo(q).then((result: string): void => {
    info.value = result;
  });
};

const createDoProcess = (q: string, isOpen: boolean) => {
  query.value = q;
  window.value = isOpen;
};
</script>

<template>
  <section>
    <h1>天気表示ポイントリスト</h1>
    <OneCity
      v-for="[key, data] in cityList"
      v-bind:key="key"
      v-bind:id="data.id"
      v-bind:name="data.name"
      v-bind:q="data.q"
      v-on:createDoProcess="createDoProcess"
    />
    <WeatherInfo v-if="window" v-bind:q="query" v-on:window="createDoProcess" />
  </section>
</template>
