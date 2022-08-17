<script setup></script>

<template>
  <section class="drawer h-full">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle max-h-0" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <nav class="navbar w-full justify-between bg-base-100 lg:px-32">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-ghost btn-square text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <!-- Logo -->
        <nuxt-link to="/" class="text-2xl text-neutral-content"
          ><img class="h-24" src="@/assets/images/logo.png" alt="logo"
        /></nuxt-link>
        <button class="btn btn-accent h-fit flex-col px-2 text-base-100">
          <i class="fa-solid fa-language text-lg"></i>
          <span class="text-xs">EN </span>
        </button>
        <div class="hidden flex-none lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu for desktop -->
            <li><a>Navbar Item 1</a></li>
            <li><a>Navbar Item 2</a></li>
          </ul>
        </div>
      </nav>
      <!-- Page content  -->
      <slot></slot>
    </div>

    <!-- Mobile Sidebar -->
    <Sidebar />
  </section>
</template>
