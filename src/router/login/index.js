export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      showHeader: false,
      showFooter: false,
    },
  },
]
