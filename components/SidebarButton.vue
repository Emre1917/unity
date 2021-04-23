<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="py-3 px-5"
      :class="activeIndex === index ? '' : ''"
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
import Icon from '@/components/svg/Icon'

export default {
  components: {
    Icon,
  },

  props: {
    title: {
      type: String,
      default: 'placeholder',
    },
    link: {
      type: String,
      default: '/',
    },
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
