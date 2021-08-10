<template>
  <b-container
    fluid
    class="d-flex h-100 w-100 px-0 j-c-center"
    :style="`background-image: url(${images.login}); background-repeat: no-repeat; background-size: cover`"
  >
    <menuLogin />
  </b-container>
</template>

<script>
import menuLogin from '@/components/menus/menus_login.vue'

export default {
  components: {
    menuLogin,
  },
  data() {
    return {
      images: {
        // eslint-disable-next-line global-require
        login: require('../assets/images/login2.png'),
      },
    }
  },
}
</script>

<style>

</style>
