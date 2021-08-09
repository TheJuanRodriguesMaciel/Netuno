import Vue from 'vue'
import Vuex from 'vuex'

// modulos
import app from './app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
  },
  strict: process.env.DEV,
})
