<script setup></script>

<template>
  <div class="flex w-screen justify-center lg:hidden">
    <ul
      class="menu rounded-box menu-horizontal fixed bottom-2 mx-auto gap-4 bg-accent/75 px-4 py-2 text-base-100 transition-all duration-300"
    >
      <li class="w-fit justify-center">
        <nuxt-link
          to="/"
          class="flex flex-col items-center gap-0 p-0 active:bg-accent/75 active:text-primary"
          ><i class="fa-solid fa-house text-xl"></i> Inicio</nuxt-link
        >
      </li>
      <li class="w-fit justify-center">
        <nuxt-link
          :to="{ name: 'promos' }"
          class="flex flex-col items-center gap-0 p-0 active:bg-accent/75 active:text-primary"
          ><i class="fa-solid fa-calendar-days text-xl"></i> Eventos</nuxt-link
        >
      </li>
      <li class="w-fit justify-center">
        <nuxt-link
          :to="{ name: 'survey' }"
          class="flex flex-col items-center gap-0 p-0 active:bg-accent/75 active:text-primary"
          ><i class="fa-solid fa-square-poll-horizontal text-xl"></i> Encuesta</nuxt-link
        >
      </li>
      <ScrollToTop />
    </ul>
  </div>
</template>
