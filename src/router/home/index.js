export default [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      menuBar: true,
      pageTitle: 'Login',
      authRequired: true,
    },
  },
]
