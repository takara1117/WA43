<script setup lang="ts">
import { ref } from "vue";
import { doPost } from "@/apiAccess";

const returnStr = ref("未取得");
const name = ref("");
const comment = ref("");
const doProcess = (): void => {
  const promise = doPost(name.value, comment.value);
  promise.then((result: string): void => {
    returnStr.value = result;
  });
};
</script>

<template>
  <form v-on:submit.prevent="doProcess">
    <label>名前:<input type="text" v-model="name" /> </label><br />
    <label>コメント: <input type="text" v-model="comment" /> </label><br />
    <button type="submit">送信</button>
  </form>

  <p>{{ returnStr }}</p>
</template>
