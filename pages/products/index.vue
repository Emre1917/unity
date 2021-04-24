<template>
  <div>
    <div v-for="item in menus" :key="item.id">
      The Yemek: {{ item.name }} Price: {{ item.price }} Gluten:
      {{ item.gluten }} Melzame: {{ item.malzeme }}

      <img
        :src="`http://localhost:1337${item.image.url}`"
        alt=""
        class="w-28 h-28 rounded-2xl object-cover."
      />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  data() {
    return {
      menus: [],
    }
  },
  apollo: {
    menus: {
      query: gql`
        query {
          menus {
            id
            name
            malzeme
            price
            gluten
            image {
              url
            }
          }
        }
      `,
    },
  },
  mounted() {
    this.$store.commit('changeActiveIndex', 1)
  },
}
</script>

<style></style>
