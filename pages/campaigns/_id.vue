<template>
  <div>
    <img v-if="!isLoading" src="/images/loading.svg" alt="" class="h-20 w-20" />
    <div class="p-10">
      <h1 class="text-4xl font-bold">{{ space.title }}</h1>
      <p>{{ space.content }}</p>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      space: {},
      id: this.$route.params.id,
      isLoading: false,
    }
  },
  mounted() {
    this.getSpace()
  },

  methods: {
    async getSpace() {
      try {
        this.isLoading = true

        const res = await this.$apollo.query({
          query: gql`
            query getSpace($id: ID!) {
              space(id: $id) {
                id
                title
                content
                thumbnail {
                  url
                }
              }
            }
          `,
          variables: {
            id: this.id,
          },
          fetchPolicy: 'no-cache',
        })

        this.space = res.data.space
      } catch (e) {
        this.isLoading = false
        // console.log(e)
      }
    },
  },
}
</script>

<style></style>
