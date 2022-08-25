import { defineStore } from 'pinia';
import menu_es from '@/data/menu-es.json';
import events from '@/data/events.json';

export const useMainStore = defineStore('main', {
  state: () => ({
    modal: false,
    isLoading: false,
    language: 'es',
    menu: [],
    menu_es: [],
    menu_en: [],
    events: [],
  }),

  getters: {
    getByCategory: (state) => {
      return (id: string) => state.menu.find((category) => category.category === id);
    },
  },

  actions: {
    async fetch() {
      try {
        // Fetching menu and save it in state
        // const { es, en } = await $fetch('/api/menu');
        // const menuEs = JSON.parse(menu_es);
        this.menu = menu_es;
        // this.menu = menuEs;
        // this.menu_es = es;
        // this.menu_en = en;

        // Fetching events and save them in state
        // const { events } = await $fetch('/api/events');
        this.events = events;
      } catch (error) {
        console.error(error);
      }
    },

    changeLanguage(language) {
      this.menu = `${this.menu}-${language}`;
    },
  },
});
