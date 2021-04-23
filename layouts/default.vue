<template>
  <div class="flex w-screen h-screen">
    <aside class="w-72 h-screen flex-none border-r border-genGray">
      <div
        class="h-full w-72 flex flex-col"
        :class="$store.state.isDark ? 'bg-main' : 'bg-white'"
      >
        <!-- sidebar top -->
        <div
          class="side-top w-full h-side-top flex-none flex items-center px-10"
          :class="$store.state.isDark ? 'bg-main' : 'bg-white'"
        >
          <!-- logo white -->
          <img
            v-if="$store.state.isDark"
            class=""
            src="https://ui8-unity.herokuapp.com/img/logo-white.png"
            alt=""
          />
          <!-- logo black -->
          <img
            v-if="!$store.state.isDark"
            src="https://ui8-unity.herokuapp.com/img/logo.png"
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
          <ProfileMenu />
        </div>
        <!-- sidebar bottom -->
        <div
          class="h-16 flex-none ml-4"
          :class="$store.state.isDark ? 'bg-main' : 'bg-white'"
        >
          <div
            class="w-14 h-7 bg-gray-900 rounded-full p-1"
            @click="darkMode()"
          >
            <div
              class="w-5 h-5 bg-white rounded-full transform transition-all duration-400 cursor-pointer"
              :class="isSwitch ? 'translate-x-7' : 'translate-x-0'"
            ></div>
          </div>
        </div>
      </div>
    </aside>

    <!-- main -->
    <Nuxt />
  </div>
</template>

<script>
import SidebarButton from '@/components/SidebarButton'
import ProfileMenu from '@/components/ProfileMenu'

export default {
  components: {
    SidebarButton,
    ProfileMenu,
  },
  data() {
    return {
      isSwitch: false,
    }
  },
  methods: {
    darkMode() {
      this.isSwitch = !this.isSwitch
      this.$store.commit('darkToggle')
    },
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
