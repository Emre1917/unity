<template>
  <div
    class="w-full h-full txtsize flex justify-center"
    :class="$store.state.isDark ? 'bg-main' : 'bg-white '"
  >
    <div class="flex ? start mx-auto">
      <!-- left main -->
      <div
        class="flex flex-col text-white px-16 border-r border-genGray"
        :class="$store.state.isDark ? 'text-white' : 'text-main '"
      >
        <!-- main header -->
        <header class="mt-12 mb-11">
          <h1 class="myheader">Hi Tam Tran,</h1>
          <h1 class="font-semibold myheader2">Welcome back👋</h1>
        </header>
        <!-- main card -->
        <div class="">
          <!-- card content -->
          <div class="card bg-myPurple rounded-3xl pt-11 pb-14 pl-8 flex">
            <!-- card left -->
            <div class="w-1/3">
              <h1 class="text-3xl margB text-white">
                Set a Google Analytics Code
              </h1>
              <p class="text-sm margB text-white">
                Did you know you can set a Google Analytics code for your
                products?
              </p>
              <button
                class="flex items-center justify-center px-5 h-14 w-40 rounded-2xl font-semibold"
                :class="$store.state.isDark ? 'bg-main ' : 'bg-white '"
              >
                Settings
              </button>
            </div>
            <!-- card right -->
            <div class="w-2/3 flex justify-center">
              <!-- card img -->
              <img
                src="https://ui8-unity.herokuapp.com/img/slider-pic.png"
                alt=""
              />
              <!-- SLIDER BUTTONS WILL GO HERE -->
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
        <!-- lower main -->
        <div class="flex">
          <!-- lower right card -->
          <div class="mx-4 p-8">
            <div class=""></div>
          </div>
          <!-- lower left card -->
          <div class="mx-4"></div>
        </div>
      </div>
      <!-- right main -->
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('changeActiveIndex', 0)
  },
}
</script>

<style scoped>
.card {
  width: 640px;
  height: 330px;
}
.margB {
  margin-bottom: 14px;
}
.txtsize {
  font-size: 14px;
}
img {
  width: 214px;
  height: 214px;
}
.myheader {
  font-size: 24px;
}
.myheader2 {
  font-size: 48px;
}
</style>
