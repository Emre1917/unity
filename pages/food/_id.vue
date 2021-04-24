<template>
  <div>
    <nuxt-link
      v-for="(food, index) in foods"
      :key="index"
      class="flex p-5 shadow-lg m-5 border border-gray-200 rounded-2xl"
      :to="`item/${food.id}`"
    >
      <img
        :src="'http://localhost:1337' + food.image[0].url"
        alt=""
        class="w-32 h-32 rounded-lg object-cover"
      />

      <div class="ml-5 flex flex-col justify-between">
        <h1>{{ food.name }}</h1>
        <div class="flex justify-between">
          <h1>{{ food.price }}</h1>

          <div class="flex">
            <h1 @click="subtractItem(index)">-</h1>
            <h1>{{ activeIndex === index ? num : 0 }}</h1>
            <h1 @click="addItem(index)">+</h1>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  layout: 'food',
  data() {
    return {
      foods: [],
      num: 0,
      activeIndex: 0,
      id: this.$route.params.id,
      isLoading: false,
    }
  },
  mounted() {
    this.getCategory()
  },

  methods: {
    addItem(index) {
      this.activeIndex = index

      this.num = this.num + 1
    },
    subtractItem(index) {
      this.activeIndex = index
      if (this.num !== 0) {
        this.num = this.num - 1
      }
    },
    async getCategory() {
      try {
        this.isLoading = true

        const res = await this.$apollo.query({
          query: gql`
            query getCategory($id: ID!) {
              category(id: $id) {
                id
                name
                foods {
                  id
                  name
                  price
                  image {
                    url
                  }
                }
              }
            }
          `,
          variables: {
            id: this.id,
          },
          fetchPolicy: 'no-cache',
        })

        this.foods = res.data.category.foods
      } catch (e) {
        this.isLoading = false
        // console.log(e)
      }
    },
  },
  //   apollo: {
  //     foods: {
  //       query: gql`
  //         query {
  //           foods {
  //             id
  //             name
  //             price
  //             category {
  //               id
  //               name
  //             }
  //             image {
  //               url
  //             }
  //           }
  //         }
  //       `,
  //     },
  //   },
}
</script>

<style></style>
