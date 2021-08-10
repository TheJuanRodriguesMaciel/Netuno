<template>
  <div>
    <img
      v-if="!show_rocket"
      :src="images.rocket"
      class="rocket left-rocket"
    >
    <img
      v-else
      :src="images.rocket"
      class="rocket right-rocket"
    >
  </div>
</template>

<script>
export default {
  props: ['show_rocket'],
  data() {
    return {
      images: {
        // eslint-disable-next-line global-require
        rocket: require('../../assets/images/rocket.png'),
      },
    }
  },
}
</script>

<style scoped>
  .left-rocket{
    left: 15px;
  }

  .right-rocket{
    right: 0;
  }
</style>
