<script setup>
const props = defineProps({
  category: {
    type: Object,
    default: () => ({}),
  },
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
    <span class="text-lg text-accent">{{ category.category }}</span>
  </nuxt-link>
</template>
