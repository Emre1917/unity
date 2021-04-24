<template>
  <div>
    <header class="flex m-5 space-x-3">
      <nuxt-link
        v-for="category in categories"
        :key="category.id"
        :to="'/food/' + category.id"
        class="w-10 h-10 rounded-full border border-gray-300 shadow-xl flex items-center justify-center"
      >
        <Icon :icon="category.icon" class="w-8 h-8" />
      </nuxt-link>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Icon from '@/components/svg/Icon'
import gql from 'graphql-tag'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      query: gql`
        query {
          categories {
            id
            name
            icon
          }
        }
      `,
    },
  },
}
</script>

<style></style>
