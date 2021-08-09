import { ToastPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import '@/@core/utils/global-functions'
import '@/libs/vue-the-mask'
import '@/libs/bootstrap-vue'
import '@/libs/v-modal'
import '@/libs/vee-validate'
import '@/libs/vue-toastification'
import '@/libs/v-money'

Vue.use(ToastPlugin)

require('@/assets/scss/style.scss')

new Vue({
  router,
  store,

  render: h => h(App),
}).$mount('#app')
