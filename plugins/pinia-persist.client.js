import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// const piniaPersist = ({ $pinia }) => {
//   $pinia.use(piniaPluginPersistedstate);
// };

// export default piniaPersist;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(piniaPluginPersistedstate);
});
