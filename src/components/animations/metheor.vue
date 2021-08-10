<template>
  <div>
    <img
      :id="`metheor_${the_index}`"
      :class="`position-absolute metheor${the_index}`"
      :src="images.metheor"
    >
  </div>
</template>

<script>
export default {
  props: ['the_index'],
  data() {
    return {
      images: {
        // eslint-disable-next-line global-require
        metheor: require('../../assets/images/metheor.png'),
      },
    }
  },
}
</script>

<style>

</style>
