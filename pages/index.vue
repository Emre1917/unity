<template>
  <div class="bg-main w-full h-full p-5">
    <div class="text-white">Here is the index page</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('changeActiveIndex', 0)
  },
}
</script>
