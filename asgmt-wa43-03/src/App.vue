<script setup lang="ts">
import { ref } from "vue";

//初期値
const memberDataList = new Map<number, Member>();
memberDataList.set(4451, {
  id: 4451,
  name: "しんちゃん",
  mail: "shin@hoge.com",
  tel: "09012345678",
  note: "へんなやつ",
});
memberDataList.set(4463, {
  id: 4463,
  name: "たけちゃん",
  mail: "take@hoge.com",
  tel: "08098765432",
});
memberDataList.set(4474, {
  id: 4474,
  name: "けんちゃん",
  mail: "ken@hoge.com",
  tel: "07045678912",
});
memberDataList.set(4482, {
  id: 4482,
  name: "だいちゃん",
  mail: "dai@hoge.com",
  tel: "09078459632",
});
const memberList = ref(memberDataList);

//型指定
interface Member {
  id: number;
  name: string;
  mail: string;
  tel: string;
  note?: string;
}

let showOrNot = ref(false);
let getId = ref();
let getName = ref();
let getMail = ref();
let getTel = ref();
let getNote = ref();

//値取得
const editMemberInfo = (
  id: number,
  name: string,
  mail: string,
  tel: string,
  note?: string
): void => {
  showOrNot.value = true; //編集ボタン押した時にform出す
  getId.value = id;
  getName.value = name;
  getMail.value = mail;
  getTel.value = tel;
  getNote.value = note;
};

//入力値の代入
const editInfo = (getId: number): void => {
  const editData = memberList.value.get(getId) as Member;
  editData.name = getName.value;
  editData.mail = getMail.value;
  editData.tel = getTel.value;
  editData.note = getNote.value;

  //変更ボタン押した時にform消す
  showOrNot.value = false;
};
</script>

<template>
  <template v-for="[id, memberItem] in memberList" v-bind:key="id">
    <li>{{ memberItem.name }}</li>
    ID
    <dd>{{ memberItem.id }}</dd>
    メールアドレス
    <dd>{{ memberItem.mail }}</dd>
    電話番号
    <dd>{{ memberItem.tel }}</dd>
    <dd>{{ memberItem.note }}</dd>

    <button
      v-on:click="
        editMemberInfo(
          memberItem.id,
          memberItem.name,
          memberItem.mail,
          memberItem.tel,
          memberItem.note
        )
      "
    >
      このメンバー情報を編集
    </button>
  </template>
  <form action="#" v-show="showOrNot" v-on:submit.prevent="editInfo(getId)">
    <p>必要な情報を入力してください。</p>
    ID
    <dd>{{ getId }}</dd>
    氏名
    <dd><input type="text" v-model="getName" required /></dd>
    メールアドレス
    <dd><input type="mail" v-model="getMail" required /></dd>
    電話番号
    <dd><input type="tel" v-model="getTel" required /></dd>
    備考
    <dd><textarea v-model="getNote" cols="30" rows="2"></textarea></dd>
    <button>変更</button>
  </form>
</template>

<style>
form dd {
  padding-top: 5px;
}
</style>
