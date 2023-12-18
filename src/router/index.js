// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home"*/'@/view/Home.vue'),
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/aboutme',
    component: () => import(/* webpackChunkName: "aboutme"*/'@/view/AboutMe.vue'),
    meta: {
      title: '關於我'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
