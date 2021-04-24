<template>
  <div class="w-full h-full text-gray-300 flex justify-center items-center">
    UNDER CONSTRUCTION
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  layout: 'food',
  data() {
    return {
      foods: [],
    }
  },
  apollo: {
    foods: {
      query: gql`
        query {
          foods {
            id
            name
            price
            category {
              id
              name
            }
            image {
              url
            }
          }
        }
      `,
    },
  },
}
</script>

<style></style>
