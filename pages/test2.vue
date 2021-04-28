<template>
  <div>
    <input v-model="email" type="email" />
    <input v-model="password" type="password" />
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
    }
  },
  methods: {
    async submit() {
      console.log('email: ', this.email)
      console.log('password: ', this.password)

      try {
        this.isLoading = true

        const res = await this.$apollo.mutation({
          // this is still query
          mutation: gql`
            login (input: {identifier:"crciemre123@gmail.com", password:"34td4032"}){
    jwt
    user{
      username
    }
  } he
          `,
          variables: {
            id: this.id,
          },
          fetchPolicy: 'no-cache',
        })

        this.foods = res.data.category.foods
        this.image = res.data.food.image
      } catch (e) {
        this.isLoading = false
        // console.log(e)
      }
    },
  },
}
</script>

<style></style>
