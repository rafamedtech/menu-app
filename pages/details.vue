<script setup></script>

<template>
  <div class="min-h-screen">
    <div class="carousel-item relative w-full md:w-96 lg:w-1/3">
      <img
        src="https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80"
        class="w-full object-cover"
      />
      <div class="absolute pt-4 pl-4">
        <button class="btn" @click="$router.back()">Back</button>
      </div>
    </div>
    <div>
      <div
        class="bottom-0 flex h-full w-full flex-col items-center justify-center gap-x-2 gap-y-8 rounded-b-2xl bg-neutral/40 py-4"
      >
        <h2 class="text-center text-3xl text-secondary">Grand Slam</h2>
        <span class="text-center"
          >Item description asdoas asiodhoaisd aioshdoaisd oiashdoiahsd ahiosdhi</span
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
  </div>
</template>
