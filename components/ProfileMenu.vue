<template>
  <!-- profile menu -->
  <div>
    <div class="container bg-gray-300 bg-opacity-5 rounded-2xl">
      <div v-if="activeProfile" class="list my-1 mx-3">
        <div class="flex justify-center w-full mb-2 pt-4">
          <div class="h-1 w-1/2 bg-gray-600 rounded-full"></div>
        </div>
        <div
          v-for="(item, index) in 2"
          :key="index"
          class="flex flex-col space-y-2 p-4 rounded-xl hover:bg-gray-500"
        >
          <h1 class="text-white">list</h1>
        </div>
      </div>

      <div
        class="w-full h-16 mt-6 hover:bg-blue-500 flex-none rounded-xl space-x-4 px-3 items-center flex justify-around cursor-pointer"
        :class="activeProfile ? 'bg-blue-500' : ''"
        @click="activeProfile = !activeProfile"
      >
        <!-- pfp -->
        <div class="w-10 h-10 items-center">
          <img src="https://ui8-unity.herokuapp.com/img/ava.png" alt="" />
        </div>
        <!-- text -->
        <div class="">
          <h1 class="text-white">Tam Tran</h1>
          <h1 class="text-sm text-gray-300">Free Account</h1>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeProfile: false,
    }
  },
}
</script>

<style></style>
