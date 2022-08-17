<script setup>
const menu = ref([
  {
    category: 'Breakfast',
    items: [
      {
        name: 'Grand Slam',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
      {
        name: 'Fried Chicken',
        cover:
          'https://images.unsplash.com/photo-1564436872-f6d81182df12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
        name: 'Pizza Napolitana',
        cover:
          'https://images.unsplash.com/photo-1599462620592-8e17c48eed70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      },
      {
        name: 'Pasta Pomodoro',
        cover:
          'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80',
      },
      {
        name: 'Mixed Salad',
        cover:
          'https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
        name: 'Donuts',
        cover:
          'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
        name: 'Mojito',
        cover:
          'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
      },
    ],
  },
  {
    category: 'Meals',
    items: [
      {
        name: 'Fried Chicken',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
      {
        name: 'Fried Chicken',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
    ],
  },
  {
    category: 'Pizzas',
    items: [
      {
        name: 'Pizza Napolitana',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
      {
        name: 'Pizza Napolitana',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
    ],
  },
  {
    category: 'Pastas',
    items: [
      {
        name: 'Pasta Pomodoro',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
      {
        name: 'Pasta Pomodoro',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
    ],
  },
  {
    category: 'Salads',
    items: [
      {
        name: 'Caesars Salad',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
      {
        name: 'Mixed Salad',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
    ],
  },
  {
    category: 'Drinks',
    items: [
      {
        name: 'Mojito',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
      {
        name: 'Beer',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Cheesecake',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
      {
        name: 'Chocolate Cake',
        cover:
          'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80',
      },
    ],
  },
]);
</script>

<template>
  <div class="min-h-screen">
    <div class="carousel-item relative w-full md:w-96 lg:w-1/3">
      <img
        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        class="w-full object-cover brightness-75"
      />

      <div
        class="absolute bottom-0 flex h-full w-full flex-col items-center justify-center gap-x-2 gap-y-8 rounded-b-2xl bg-neutral/40 pb-4"
      >
        <h2 class="text-3xl text-white">Restaurant name</h2>
        <span class="px-4 text-center"
          >📍 San Patricio 6109, H14, Villa Residencial Santa Fe I, Tijuana B.C. cp. 22667</span
        >
        <div class="flex w-full justify-around gap-2">
          <div class="flex h-full flex-col justify-center text-xl">
            <span class="badge h-full w-full rounded-full py-2 text-3xl">🚚</span>
            <span class="text-center text-xs font-bold">Entrega-pickup</span>
          </div>
          <div class="flex h-full flex-col justify-center text-xl">
            <span class="badge badge-primary h-full w-full rounded-full py-2 text-3xl">🍻</span>
            <span class="text-center text-xs font-bold">Vende alcohol</span>
          </div>
          <div class="flex h-full flex-col justify-center text-xl">
            <span class="badge badge-secondary h-full w-full rounded-full py-2 text-3xl">🍗</span>
            <span class="text-center text-xs font-bold">Solo comida</span>
          </div>
          <div class="flex h-full flex-col justify-center text-xl">
            <span class="badge badge-accent h-full w-full rounded-full py-2 text-3xl">🕛</span>
            <span class="text-center text-xs font-bold">Todo el dia</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <h2 class="text-center text-3xl text-secondary">Menu</h2>

      <!-- <div class="flex-no-wrap tabs tabs-boxed mt-5 flex overflow-x-scroll bg-neutral/50 py-4">
        <a class="tab tab-active text-xl">Breakfast</a>
        <a class="tab text-xl">Meals</a>
        <a class="tab text-xl">Pizzas</a>
        <a class="tab text-xl">Pastas</a>
        <a class="tab text-xl">Salads</a>
        <a class="tab text-xl">Drinks</a>
        <a class="tab text-xl">Desserts</a>
      </div> -->
      <TabsWrapper :menu="menu">
        <Tab title="item.category">
          <div class="mt-5 grid grid-cols-2 gap-4 px-4">
            <nuxt-link
              class="card h-fit w-full bg-base-100 shadow-xl"
              v-for="menuItem in menu"
              :key="menuItem"
              to="/details"
            >
              <figure class="h-64">
                <img
                  :src="menuItem.cover"
                  class="rounded-box h-full w-full object-cover"
                  alt="item picture"
                />
              </figure>
              <span class="text-center text-base">{{ menuItem.name }}</span>
            </nuxt-link>
          </div>
        </Tab>
      </TabsWrapper>
    </div>
  </div>
</template>
