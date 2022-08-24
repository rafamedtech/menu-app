import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    modal: false,
    isLoading: false,
    language: 'es',
    menu: [],
    menu_en: [],
  }),

  getters: {
    getByCategory: (state) => {
      return (id: string) => state.menu.find((category) => category.category === id);
    },
  },

  actions: {
    async fetch() {
      try {
        // const { data: menu } = await useFetch(() => '/api/menu', { params: { language: 'es' } });
        const { es, en } = await $fetch('/api/menu');
        this.menu = es;
        this.menu_en = en;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
