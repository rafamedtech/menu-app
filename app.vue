<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const store = useMainStore();
await store.fetch();

const { modal, isLoading } = storeToRefs(store);

useHead({
  link: {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css',
  },
});
</script>

<template>
  <section class="relative mb-20">
    <AppHeader>
      <NuxtPage />
    </AppHeader>
    <BottomNav />
    <Modal v-if="modal" />
    <Loader v-if="isLoading" />
  </section>
</template>
