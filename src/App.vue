<template>
  <router-view style="height: 100%;"></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>
