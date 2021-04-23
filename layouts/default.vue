<template>
  <div class="flex w-screen h-screen">
    <aside class="w-72 h-screen flex-none border-r border-genGray">
      <div class="bg-main h-full w-72 flex flex-col">
        <!-- sidebar top -->
        <div
          class="side-top w-full h-side-top bg-main flex-none flex items-center px-10"
        >
          <img
            class=""
            src="https://ui8-unity.herokuapp.com/img/logo-white.png"
            alt=""
          />
        </div>
        <!-- sidebar main -->
        <div
          class="side-main w-full h-full px-5 pb-8 flex flex-col text-genGray overflow-y-auto hide-scroll"
        >
          <!-- sidebar top main -->
          <div class="mb-10 pb-8 flex flex-col border-b border-genGray">
            <!-- sidebar top caption -->
            <span class="text-xs pl-5 mb-4">Admin tools</span>
            <!-- button 1 -->
            <SidebarButton />
          </div>
          <!-- sidebar bottom main -->
          <div class="w-full h-52 flex flex-col flex-none s">
            <!-- sidebar bot caption -->
            <span class="text-xs pl-5 mb-4">Insights</span>
          </div>
          <!-- account button -->
          <div
            class="w-full h-16 mt-6 flex-none rounded-xl px-5 bg-blue-500 space-x-4 items-center flex justify-center"
          >
            <!-- pfp -->
            <div class="w-10 h-10 items-center">
              <img src="https://ui8-unity.herokuapp.com/img/ava.png" alt="" />
            </div>
            <!-- text -->
            <div class="">
              <h1 class="text-white">Tam Tran</h1>
              <h1 class="text-sm">Free Account</h1>
            </div>
            <!-- account dropdown -->
            <div class="w-6 h-6 text-white">
              <!-- selector svg -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- sidebar bottom -->
        <div class="bg-main h-16 flex-none"></div>
      </div>
    </aside>

    <!-- main -->
    <Nuxt />
  </div>
</template>

<script>
import SidebarButton from '@/components/SidebarButton'

export default {
  components: {
    SidebarButton,
  },
}
</script>

<style>
.hide-scroll::-webkit-scrollbar {
  display: none;
}

.h-side-top {
  height: 140px;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: '#6c5dd3';
}
</style>
