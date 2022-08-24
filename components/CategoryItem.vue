<script setup>
const props = defineProps({
  category: {
    type: Object,
    default: () => ({}),
  },
});

const categoryTitle = computed(() => {
  return props.category.category.charAt(0).toUpperCase() + props.category.category.slice(1);
});
</script>

<template>
  <nuxt-link
    :to="{ path: `/${category.category.toLowerCase()}` }"
    class="h-fit w-full text-center"
    to="/category"
  >
    <figure class="card h-64 shadow-xl">
      <img
        :src="category.cover"
        class="rounded-box h-full w-full object-cover"
        alt="item picture"
      />
    </figure>
    <span class="text-lg text-accent">{{ categoryTitle }}</span>
  </nuxt-link>
</template>
