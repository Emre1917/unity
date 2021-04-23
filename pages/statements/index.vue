<template>
  <div>statements</div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('changeActiveIndex', 5)
  },
}
</script>

<style></style>
