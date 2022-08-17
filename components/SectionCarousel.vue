<script setup>
const img =
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
</script>

<template>
  <div>
    <h2 class="pl-4 text-2xl text-secondary"><slot></slot></h2>

    <div class="carousel carousel-center h-60 max-w-md space-x-4 bg-transparent p-4 md:min-w-full">
      <nuxt-link
        to="/restaurant"
        class="carousel-item relative h-full w-4/5 md:w-96 lg:w-1/3"
        v-for="card in 7"
      >
        <img :src="img" class="rounded-box w-full object-cover" />
        <div
          class="absolute bottom-0 flex w-full flex-col items-center justify-center gap-x-2 gap-y-8 rounded-b-2xl bg-neutral/40 pb-4"
        >
          <h2 class="text-3xl text-white">Restaurant name</h2>
          <div class="flex gap-2">
            <div class="badge py-4 text-xl">📍</div>
            <div class="badge badge-primary py-4 text-xl">🍻</div>
            <div class="badge badge-secondary py-4 text-xl">🍗</div>
            <div class="badge badge-accent py-4 text-xl">🕛</div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
