<script setup lang="ts">
import { ref } from "vue";
import { getWeatherInfo } from "../apiAccess";

interface Props {
  q: string;
}

const info = ref("");

const props = defineProps<Props>();

const emits = defineEmits<{ (event: "window", window: boolean): void }>();

const promise = getWeatherInfo(props.q);
promise.then((result: string): void => {
  info.value = result;
});

const closeBtn = (): void => {
  emits("window", false);
};
</script>

<template>
  <p>{{ info }}<button class="btn" v-on:click="closeBtn()">閉じる</button></p>
</template>
