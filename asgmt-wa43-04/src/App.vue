<script setup lang="ts">
import { ref } from "vue";
import OneMember from "./components/OneMember.vue";
import type { Member } from "./interfaces";

const memberListInit = new Map<number, Member>();
memberListInit.set(4451, {
  id: 4451,
  name: "しんちゃん",
  mail: "shin@hoge.com",
  tel: "09012345678",
  note: "へんなやつ",
});
memberListInit.set(4463, {
  id: 4463,
  name: "たけちゃん",
  mail: "take@hoge.com",
  tel: "08098765432",
});
memberListInit.set(4474, {
  id: 4474,
  name: "けんちゃん",
  mail: "ken@hoge.com",
  tel: "07045678912",
});
memberListInit.set(4482, {
  id: 4482,
  name: "だいちゃん",
  mail: "dai@hoge.com",
  tel: "09078459632",
});
const memberList = ref(memberListInit);
</script>

<template>
  <section>
    <h1>WA43 課題4 子コンポーネント連携の確認</h1>
    <OneMember
      v-for="[id, member] in memberList"
      v-bind:key="id"
      v-bind:id="id"
      v-bind:name="member.name"
      v-bind:mail="member.mail"
      v-bind:tel="member.tel"
      v-bind:note="member.note"
    />
  </section>
</template>
