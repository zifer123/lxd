<template>
  <div>
    <div id="container" class="container"></div>
  </div>
</template>

<script>
  export default {
    mounted() {
      let { id } = this.$route.params;
      this.$http.get(`/static/funDetail/${id}.html`).then(body => {
        document.getElementById('container').innerHTML = body.data;
      });
    }
  }
</script>

<style scoped>
  .container {
    font-size: 18px;
  }
</style>
