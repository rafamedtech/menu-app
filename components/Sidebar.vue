<template>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label>
    <ul class="menu z-50 w-80 overflow-y-auto bg-base-100 p-4">
      <!-- Sidebar content here -->
      <li><img src="@/assets/images/logo1.png" alt="logo" /></li>
      <li class="flex w-full flex-row justify-center gap-4 text-5xl active:bg-transparent">
        <nuxt-link to="https://www.facebook.com/brunette.realdelmar" target="_blank"
          ><i class="fa-brands fa-facebook"></i
        ></nuxt-link>
        <nuxt-link to="https://www.instagram.com/brunette.realdelmar/" target="_blank"
          ><i class="fa-brands fa-instagram"></i
        ></nuxt-link>
      </li>
      <li><p class="mx-auto text-center font-bold text-accent">(664) 974 6842</p></li>
      <li>
        <div class="flex flex-col text-center">
          <h4 class="font-handlee text-2xl">Horario</h4>
          <article>
            <p class="text-lg font-bold text-accent">Martes - Jueves</p>
            <span>9:00 AM - 10:00 PM</span>
          </article>
          <article>
            <p class="text-lg font-bold text-accent">Viernes - Sabado</p>
            <span>9:00 AM - 12:00 AM</span>
          </article>
          <article>
            <p class="text-lg font-bold text-accent">Domingo</p>
            <span>8:00 AM - 6:00 PM</span>
          </article>
        </div>
      </li>
      <span class="mt-20 text-center">Created by Rafamed</span>
    </ul>
  </div>
</template>
