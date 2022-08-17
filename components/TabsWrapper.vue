<script setup>
// const slots = useSlots();

const props = defineProps(['menu']);

const tabTitles = ref(props.menu.map((tab) => tab.category));
// const tabTitles = ref(slots.default().map((tab) => tab.props.title));

const selectedTitle = ref(tabTitles.value[0]);

provide('selectedTitle', selectedTitle);
</script>

<template>
  <div>
    <ul class="flex-no-wrap tabs tabs-boxed mt-5 flex overflow-x-scroll bg-neutral/50 py-4">
      <li
        class="tab text-xl"
        :class="{ 'tab-active': title === selectedTitle }"
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>

    <slot></slot>
  </div>
</template>
