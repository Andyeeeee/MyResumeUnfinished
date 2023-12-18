// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Font.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {
          title: '首頁'
        }
      },
      {
        path: '/aboutme',
        name: 'AboutMe',
        component: () => import(/* webpackChunkName:"aboutme" */ '@/views/AboutMe.vue'),
        meta: {
          title: '關於我'
        }
      }
    ]
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
