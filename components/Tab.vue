<script setup>
const props = defineProps(['title']);

const selectedTitle = inject('selectedTitle');
</script>

<template>
  <div v-show="title === selectedTitle">
    <slot></slot>
  </div>
</template>
