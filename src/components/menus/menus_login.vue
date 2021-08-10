<template>
  <div
    id="login_access_menu"
  >
    <div class="h-100 w-100">
      <div>
        <rocket :show_rocket="showRocket" />
      </div>
      <div
        v-for="(item, index) in rockets"
        :key="index"
      >
        <div v-if="`${rockets.showRocket}_${index}`">
          <metheor :the_index="index" />
        </div>
      </div>
    </div>
    <div
      id="menu"
      class="d-flex j-c-center"
    >
      <div class="text-center">
        <img src="@/assets/images/logo.png">
        <h1 class="mt-3">Ajudando pequenas empresas crescerem!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import rocket from '@/components/animations/rocket.vue'
import metheor from '@/components/animations/metheor.vue'

export default {
  components: {
    rocket,
    metheor,
  },
  data() {
    return {
      showRocket: false,
      rockets: [
        { showRocket_1: false },
        { showRocket_2: false },
        { showRocket_3: false },
      ],
      images: {
        // eslint-disable-next-line global-require
        login: require('../../assets/images/login2.png'),
        // eslint-disable-next-line global-require
        metheor: require('../../assets/images/metheor.png'),
      },
    }
  },
  mounted() {
    setInterval(() => {
      this.showRocket = !this.showRocket
    }, 7000)
    setTimeout(() => {
      this.showMetheor2 = true
    }, 1250)
    setTimeout(() => {
      this.showMetheor3 = true
    }, 1750)
  },
}
</script>

<style scoped>
  #menu{
    height: 75vh;
    width: 33vw;
    position: relative;
    z-index: 10;
    background-color: rgba(0, 0, 0, .75);
    box-shadow: 0 0 10px 0 #00FFF0;
  }

  h1{
    font-family: 'Special Elite', cursive;
    font-size: 14px;
    color: #fff
  }
</style>
