<template>
  <div>
    <Space />
  </div>
</template>

<script>
import Space from '@/components/Space'
export default {
  components: {
    Space,
  },
  data() {
    return {}
  },
  mounted() {
    this.$store.commit('changeActiveIndex', 2)
  },
}
</script>

<style></style>
