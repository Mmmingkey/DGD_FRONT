import { createRouter, createWebHistory } from 'vue-router'
import SimpleMain from "@/views/home/SimpleMain.vue";

const routes = [
  {
    path: '/',
    name: 'SimpleMain',
    component: SimpleMain
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
