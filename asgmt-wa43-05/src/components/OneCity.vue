<script setup lang="ts">
import { computed, inject } from "vue";

import type { City } from "@/interfaces";

interface Props {
  id: number;
  q: string;
}

interface Emits {
  (event: "createDoProcess", q: string, isOpen: boolean): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const cityList = inject("cityList") as Map<number, City>;
const city = computed((): City => {
  return cityList.get(props.id) as City;
});

const onBtnClick = (q: string, isOpen: boolean): void => {
  emit("createDoProcess", q, true);
};
</script>

<template>
  <li>
    都市のIDが{{ city.id }}の{{ city.name }}の天気を
    <button v-on:click="onBtnClick(props.q, true)">表示</button>
  </li>
</template>
