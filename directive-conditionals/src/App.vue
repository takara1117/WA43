<script setup lang="ts">
import { computed } from "vue";

const randomNumber = computed((): number => {
  return Math.round(Math.random() * 100);
});
const showOrNot = computed((): boolean => {
  let showOrNot = false;
  if (randomNumber.value >= 50) {
    showOrNot = true;
  }
  return showOrNot;
});
</script>

<template>
  <p>
    点数は{{ randomNumber }}点で
    <span v-if="randomNumber >= 80">優です。</span>
    <span v-else-if="randomNumber >= 70">良です。</span>
    <span v-else-if="randomNumber >= 60">可です。</span>
    <span v-else>不可です。</span>
  </p>
  <div v-if="showOrNot">
    <img alt="Vue logo" src="./assets/logo.svg" width="150" />
    <p>ロゴを表示</p>
  </div>
  <p>
    点数は{{ randomNumber }}点
    <template v-if="randomNumber >= 80">
      で優です。
      <span class="colorRed">素晴らしい!</span>
    </template>
  </p>
  <p v-show="showOrNot">条件に合致したので表示</p>
</template>

<style>
.colorRed {
  color: red;
}
</style>
