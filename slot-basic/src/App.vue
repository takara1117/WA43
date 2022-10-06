<script setup lang="ts">
import {ref} from "vue";
import OneSection from "@/components/OneSection.vue";
import OneSectionWithSlot from "@/components/OneSectionWithSlot.vue";
import OneSectionWithFallback from "@/components/OneSectionWithFallback.vue";

const tag = ref("<p>連絡がつきません。</p>");
const taro = ref("田中太郎");
const jiro = ref("鈴木二郎");
const taroProblemsInit: string[] = ["電話が通じません。", "留守です。"];
const taroProblems = ref(taroProblemsInit);
</script>

<template>
    <section>
        <h2>スロットを利用しない場合</h2>
        <OneSection v-bind:tag="tag"/>
    </section>
    <section>
        <h2>スロットの利用</h2>
        <OneSectionWithSlot v-bind:name="taro">
            <p>連絡がつきません。</p>
        </OneSectionWithSlot>
    </section>
    <section>
        <h2>フォールバックコンテントの利用</h2>
        <OneSectionWithFallback v-bind:name="taro">
            <p>連絡がつきません。</p>
            <!--<p>{{name}}さんは連絡がつきません。</p>-->
        </OneSectionWithFallback>
        <OneSectionWithFallback v-bind:name="jiro"/>
    </section>
    <section>
        <h2>動的コンテンツのスロット</h2>
        <OneSectionWithFallback v-bind:name="taro">
            <ul>
                <li v-for="problem in taroProblems" v-bind:key="problem">
                    {{problem}}
                </li>
            </ul>
        </OneSectionWithFallback>
        <OneSectionWithFallback v-bind:name="jiro"/>
    </section>
</template>