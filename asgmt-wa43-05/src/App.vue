<script setup lang="ts">
import { reactive, provide } from "vue";

import BaseSection from "@/components/BaseSection.vue";
import { getCityInfo } from "./apiAccess";

import type { City } from "@/interfaces";

const cityListInit = new Map<number, City>();

const promise = getCityInfo();
const cityList = reactive(cityListInit);

type apiRes = {
  [key: number]: City;
};
promise.then((result: apiRes): void => {
  for (const key in result) {
    cityList.set(Number(key), {
      id: Number(key),
      name: result[key]["name"],
      q: result[key]["q"],
    });
  }
});
provide("cityList", cityList);
</script>
<template>
  <BaseSection />
</template>
