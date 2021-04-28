<template>
  <client-only>
    <div class="w-full flex flex-col h-screen justify-between bg-gray-50">
      <!-- header -->
      <header
        class="flex justify-between flex-col items-center w-full px-6 py-6"
      >
        <div class="flex justify-between w-full items-center">
          <!-- prev page -->
          <div
            class="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-100 shadow-md"
            @click="goBack()"
          >
            <Icon class="w-5 h-5" icon="chevron-l" />
          </div>
          <!-- like button -->
          <div>
            <Icon class="text-red-500 w-6 h-6" icon="heart-f" />
          </div>
          <!-- food image -->
        </div>
        <!-- NOTE: I am having problems with this image elemnt giving error 'Cannot read property '0' of undefined' and i will ask you this tmrw im sleepy' -->
        <img
          class="w-36 h-36 rounded-lg mt-20 object-cover bg-gray-100"
          :src="
            food.image
              ? 'http://localhost:1337' + food.image.url
              : 'http://localhost:3000/images/thumbnail.jpeg'
          "
          alt=""
        />
        <!-- yeah -->
      </header>
      <main
        class="w-full px-6 h-full mt-14 rounded-t-3xl bg-white shadow-2xl relative flex flex-col items-center"
      >
        <!-- count notch -->
        <div
          class="h-10 w-24 shadow-lg bg-myPurple rounded-full absolute -top-5 flex items-center justify-between px-5"
        >
          <h1 class="text-lg font-medium">-</h1>
          <h1 class="font-medium text-xl">{{ num }}</h1>
          <h1 class="text-lg font-medium">+</h1>
        </div>

        <!-- top info -->
        <div class="flex mt-10 w-full justify-between">
          <h1 class="text-xl font-medium">{{ food.name }}</h1>
          <h1 class="text-3xl font-medium">
            <span class="text-lg text-myPurple">$</span>{{ food.price }}
          </h1>
        </div>
        <!-- misc info -->
        <div class="flex justify-between w-full mt-6 font-medium">
          <!-- rating -->
          <h1 class="shadow-md rounded-full px-2">⭐️ {{ food.rating }}</h1>
          <!-- calories -->
          <h1 class="shadow-md rounded-full px-2">
            🔥 {{ food.cal }} Calories
          </h1>
          <!-- delivery time -->
          <h1 class="shadow-md rounded-full px-2">⏰ 20-30 min</h1>
        </div>
        <div class="mt-10">
          <h1 class="text-xl font-medium">Details</h1>
          <p class="mt-3 text-gray-400 opacity-70">{{ food.details }}</p>
          <h1 class="mt-8 text-xl font-medium">Ingredients</h1>
          <p class="mt-3 text-gray-400 opacity-70">{{ food.ing }}</p>
        </div>
      </main>
    </div>
  </client-only>
</template>

<script>
import Icon from '@/components/svg/Icon'
import gql from 'graphql-tag'

export default {
  components: {
    Icon,
  },
  layout: 'empty',
  data() {
    return {
      num: 0,
      id: this.$route.params.id,
      food: [],
      image: '',
    }
  },
  mounted() {
    this.getFood()
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },

    async getFood() {
      try {
        this.isLoading = true

        const res = await this.$apollo.query({
          query: gql`
            query getFood($id: ID!) {
              food(id: $id) {
                id
                name
                ing
                price
                rating
                cal
                details
                image {
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

        this.food = res.data.food
      } catch (e) {
        this.isLoading = false
        // console.log(e)
      }
    },
  },
}
</script>

<style></style>
