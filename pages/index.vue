<script setup>
import menu from '@/data/menu.json';

useHead({
  title: 'Brunette Menu',
  meta: [
    {
      name: 'description',
      content: 'Welcome to my website',
    },
  ],
});

definePageMeta({
  pageTransition: {
    name: 'up',
    mode: 'out-in',
    appear: true,
  },
});
</script>

<template>
  <main>
    <h1 class="px-2 text-center text-4xl lg:px-32">Menu</h1>
    <section class="grid grid-cols-2 gap-4 py-4 px-2 lg:px-32">
      <CategoryItem v-for="category in menu" :category="category" />
    </section>
  </main>
</template>
