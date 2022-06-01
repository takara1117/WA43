<script setup lang="ts">
import { ref } from "vue";

const pBgColor = ref("");
const msg = ref("");
const msgColor = ref("");

const onClickCheck = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  if (element.value == "") {
    pBgColor.value = "pink";
    msg.value = "お名前の入力は必須です。";
    msgColor.value = "red";
  } else {
    pBgColor.value = "white";
    msg.value = "OK";
    msgColor.value = "green";
  }
};
</script>

<template>
  <label
    >お名前<br />
    <input
      type="text"
      v-on:blur="onClickCheck"
      v-bind:style="{ backgroundColor: pBgColor }"
    />
    <p v-on:blur="onClickCheck" v-bind:style="{ color: msgColor }">
      {{ msg }}
    </p>
  </label>
</template>
