<template>
  <div>
    <!-- card -->
    <nuxt-link
      v-for="(food, index) in foods"
      :key="index"
      class="flex p-5 shadow-lg m-5 border border-gray-200 rounded-2xl"
      :to="`item/${food.id}`"
    >
      <!-- card image -->
      <img
        :src="'http://localhost:1337' + food.image[0].url"
        alt=""
        class="w-32 h-32 rounded-lg object-cover"
      />

      <!-- card info -->
      <div class="ml-5 flex flex-col justify-between w-full pr-5">
        <!-- card info r -->
        <div>
          <h1 class="font-medium text-lg">{{ food.name }}</h1>
          <span class="txtIng text-gray-500 text-opacity-70">{{
            food.ing
          }}</span>
        </div>
        <!-- card info l -->
        <div class="flex justify-between w-full items-center">
          <!-- price -->
          <h1 class="">{{ food.price }} $</h1>
          <!-- count buttons -->
          <div class="flex items-center">
            <div
              class="w-8 shadow-md h-8 flex items-center justify-center border border-myPurple border-opacity-10 rounded-lg text-myPurple"
            >
              <h1 @click="subtractItem(index)">-</h1>
            </div>
            <h1 class="mx-5">{{ activeIndex === index ? num : 0 }}</h1>
            <div
              class="w-8 shadow-md h-8 flex items-center justify-center border rounded-lg bg-myPurple text-white"
            >
              <h1 @click="addItem(index)">+</h1>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
    <!-- <h1>{{ foods.image[0].url }}</h1> -->
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
                  ing
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

<style>
.txtIng {
  font-size: 10px;
  line-height: 1px;
}
</style>
