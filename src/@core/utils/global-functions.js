/* eslint-disable func-names */
import Vue from 'vue'
import axiosIns from '@axios'
// import ToastificationContent from '@/components/toastification/ToastificationContent.vue'

Vue.prototype.showModal = function (val) { this.$modal.show(val) }
Vue.prototype.hideModal = function (val) { this.$modal.hide(val) }

Vue.prototype.getCep = function (cep) {
  axiosIns.get(`https://viacep.com.br/ws/${cep}/json/`).then(
    res => res,
  )
}

// Vue.prototype.toast = function (config) {
//   this.$toast({
//     component: ToastificationContent,
//     props: {
//       title: config.title,
//       icon: config.icon,
//       text: config.text,
//       variant: config.variant ? config.variant : null,
//       colorIcon: config.colorIcon,
//     },
//   })
// }
