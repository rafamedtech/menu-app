<script setup>
import menu from '@/data/menu.json';

const route = useRoute();

// Get category title
const title = ref(route.params.category);
const categoryTitle = computed(() => {
  return title.value.charAt(0).toUpperCase() + title.value.slice(1);
});

// Current category
const category = menu.find(({ category }) => category === categoryTitle.value);

definePageMeta({
  pageTransition: {
    name: 'up',
    mode: 'out-in',
  },
});
</script>

<template>
  <main>
    <section class="flex items-center">
      <button class="absolute my-auto ml-5 text-primary" @click="$router.back()">
        <i class="fa-solid fa-arrow-left-long text-3xl"></i>
      </button>
      <h1 class="mx-auto px-2 text-center font-handlee text-4xl lg:px-32">{{ categoryTitle }}</h1>
    </section>

    <section class="my-4">
      <div v-for="{ sectionTitle, sectionDescription, sectionItems, cover } in category.sections">
        <!-- Section banner -->
        <div class="relative flex h-28 w-full flex-col justify-center py-2">
          <img
            class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
            :src="cover"
            alt=""
          />
          <h2 class="text-center font-handlee text-2xl uppercase text-base-100">
            - {{ sectionTitle }} -
          </h2>
          <p class="text-center font-handlee text-lg font-extralight uppercase text-gray-50">
            {{ sectionDescription }}
          </p>
        </div>

        <!-- Section Items -->
        <ul class="grid grid-cols-2 gap-4 p-4">
          <li v-for="{ itemTitle, itemDescription, itemPrice } in sectionItems">
            <div>
              <h4 class="text-xl font-bold text-accent">{{ itemTitle }}</h4>
              <p class="text-primary" v-html="itemPrice"></p>
              <p v-if="itemDescription">{{ itemDescription }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
