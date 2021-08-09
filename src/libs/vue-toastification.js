import Vue from 'vue'
import Toast from 'vue-toastification'

import 'vue-toastification/dist/index.css'

const options = {
  toastClassName: [
    'bg-white', 'shadow',
  ],
  hideProgressBar: true,
  closeButton: false,
  icon: false,
  timeout: 3000,
}

Vue.use(Toast, options)
