<script setup>
if (process.client) {
  const showMenu = () => {
    if (window.scrollY > 0) {
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
    <button
      @click="scrollToTop"
      :class="{ 'opacity-0': !showButton }"
      class="btn btn-primary fixed bottom-2 right-2 z-50 rounded-xl bg-primary/70 text-neutral hover:bg-primary/70"
    >
      <i class="fa-solid fa-chevron-up text-2xl"></i>
    </button>
  </client-only>
</template>
