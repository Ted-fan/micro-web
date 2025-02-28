import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/home/index.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/person",
    name: "Person",
    component: () => import("@/views/person/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/vue-sub/" : "/"), // 在qiankun模式下,需要设置base与主应用的地址一致
  routes
})
export default router
