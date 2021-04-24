<template>
  <div>
    <nuxt-link
      v-for="i in spaces"
      :key="i.id"
      class="mycard bg-myPurple flex p-5 rounded-2xl mt-5 text-white items-center"
      :to="'/campaigns/' + i.id"
    >
      <!-- image -->
      <img
        :src="`http://localhost:1337${i.thumbnail.url}`"
        alt=""
        class="w-1/3 h-30 object-cover"
      />
      <!-- content -->
      <div class="w-2/3 pl-5">
        <!-- header -->
        <h1 class="text-xl mb-3">{{ i.title }}</h1>
        <!-- main content -->
        <p class="text-sm">{{ i.content }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      spaces: [],
    }
  },
  apollo: {
    spaces: {
      query: gql`
        query {
          spaces {
            id
            title
            content
            expired
            date
            thumbnail {
              url
            }
          }
        }
      `,
    },
  },
}
</script>

<style>
.mycard {
  width: 600px;
}
</style>
