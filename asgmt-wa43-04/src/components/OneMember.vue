<script setup lang="ts">
import { computed } from "vue";

interface Props {
  id: number;
  name: string;
  mail: string;
  tel: string;
  note?: string;
}
const props = defineProps<Props>();

const localNote = computed((): string => {
  let localNote = props.note;
  if (localNote == undefined) {
    localNote = "--";
  }
  return localNote;
});
</script>

<template>
  <section>
    <li>{{ name }}</li>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ mail }}</dd>
      <dt>電話番号</dt>
      <dd>{{ tel }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>
