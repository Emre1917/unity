<template>
  <div class="flex flex-col space-y-5">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="py-3 px-5"
      :class="activeIndex === index ? 'bg-gray-500' : ''"
      @click="grabIndex(index)"
    >
      <nuxt-link :to="item.link">
        {{ item.name }}
        <Icon
          :icon="item.icon"
          :class="
            activeIndex === index
              ? 'fill-current w-5 text-green-500'
              : 'text-blue-500 fill-current w-5'
          "
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/svg/Icon'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'home',
          link: '/test',
          icon: 'home',
        },
        {
          id: 2,
          name: 'blogs',
          link: '/blogs',
          icon: 'blog',
        },
        {
          id: 3,
          name: 'about',
          link: '/about',
          icon: 'phone',
        },
      ],
      activeIndex: 0,
    }
  },
  methods: {
    grabIndex(index) {
      //   console.log(index)
      this.activeIndex = index
    },
  },
}
</script>

<style></style>
