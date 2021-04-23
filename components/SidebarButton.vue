<template>
  <div>
    <nuxt-link
      v-for="(item, index) in items"
      :key="index"
      :to="item.link"
      class="group w-full h-14 flex-none rounded-xl px-5 space-x-4 items-center flex fs transition-all duration-300"
      :class="
        $store.state.activeIndex === index ? 'bg-myPurple text-white' : ''
      "
      @click="$store.commit('changeActiveIndex', index)"
    >
      <div class="flex items-center w-full group-hover:text-white">
        <Icon
          class="mr-4 group-hover:text-white"
          :icon="item.icon"
          :class="
            $store.state.activeIndex === index
              ? 'fill-current w-5 text-white'
              : 'fill-current w-5 text-genGray'
          "
        />
        {{ item.name }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import Icon from '@/components/svg/Icon'

export default {
  components: {
    Icon,
  },

  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Overview',
          link: '/',
          icon: 'overview',
        },
        {
          id: 2,
          name: 'Products',
          link: '/products',
          icon: 'products',
        },
        {
          id: 3,
          name: 'Campaigns',
          link: '/campaigns',
          icon: 'campaigns',
        },
        {
          id: 4,
          name: 'Schedules',
          link: '/schedules',
          icon: 'schedules',
        },
        {
          id: 5,
          name: 'Payouts',
          link: '/payouts',
          icon: 'payouts',
        },
        {
          id: 6,
          name: 'Statements',
          link: '/statements',
          icon: 'statements',
        },
        {
          id: 7,
          name: 'Settings',
          link: '/settings',
          icon: 'settings',
        },
      ],
    }
  },

  methods: {
    grabIndex(index) {
      //   console.log(index)
      // this.activeIndex = index
      this.$store.commit('changeActiveIndex', index)
    },
  },
}
</script>

<style>
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: '#6c5dd3';
}

.fs {
  font-size: 14px;
}
</style>
