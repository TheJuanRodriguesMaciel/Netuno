import Vue from 'vue'
import axios from 'axios'

const axiosIns = axios.create({
  baseURL: '',
  headers: { authorization: '' },
})

Vue.prototype.$http = axiosIns

export default axiosIns
