<script setup lang="ts">
interface Props {
    tag: string;
}
defineProps<Props>();
</script>

<template>
    <section class="box">
        {{tag}}
    </section>
</template>

<style scoped>
.box {
    border: orange 1px solid;
    margin: 10px;
}
</style>