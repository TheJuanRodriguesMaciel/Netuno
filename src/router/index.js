import Vue from 'vue'
import VueRouter from 'vue-router'

// rotas
import login from './login'

Vue.use(VueRouter)

const routes = [...login]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes,
})

export default router
