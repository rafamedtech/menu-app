<script setup>
if (process.client) {
  const showMenu = () => {
    if (window.scrollY > 100) {
      showButton.value = true;
    } else {
      showButton.value = false;
    }
  };
  window.addEventListener('scroll', showMenu);
}

const showButton = ref(false);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <client-only>
    <transition name="fade">
      <li v-if="showButton" class="w-fit">
        <button
          @click="scrollToTop"
          class="flex flex-col gap-0 p-0 active:bg-transparent active:text-primary"
        >
          <i class="fa-solid fa-chevron-up text-xl"></i> Arriba
        </button>
      </li>
    </transition>
    <!-- <button
      @click="scrollToTop"
      :class="{ 'opacity-0': !showButton }"
      class="btn btn-primary fixed bottom-2 right-2 z-50 rounded-xl bg-primary/70 text-neutral hover:bg-primary/70 lg:right-8"
    >
      <i class="fa-solid fa-chevron-up text-2xl"></i>
    </button> -->
  </client-only>
</template>
