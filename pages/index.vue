<script setup>
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const store = useMainStore();
const { menu, menu_en, menu_es, language } = storeToRefs(store);

// console.log(menu_en.value);

// const menu = ref(menu_es);

watchEffect(() => {
  if (language.value === 'en') {
    store.$patch({
      menu: menu_en.value,
    });
  }

  // if(store.language.value)
});

console.log();

useHead({
  title: 'Brunette Menu',
  meta: [
    {
      name: 'description',
      content: 'Restaurant menu website',
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
    <h1 class="px-2 text-center font-handlee text-4xl text-primary lg:px-32">Menu</h1>
    <section class="grid grid-cols-2 gap-4 py-4 px-2 lg:grid-cols-3 lg:py-20 lg:px-32">
      <Suspense>
        <CategoryItem v-for="category in menu" :category="category" :key="category.category" />
      </Suspense>
    </section>
  </main>
</template>
