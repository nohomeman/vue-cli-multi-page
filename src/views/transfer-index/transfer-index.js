import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './transfer-indexApp'
import dealpage from './loan-dealpage.vue'
import $ from 'jquery'
const routes=[
  {path: '/',component: App},
  {path: '/loan-dealpage',component: dealpage}
]
Vue.use(vueRouter)
const router = new vueRouter({
  routes:routes
})
new Vue({
  router: router
}).$mount('#app')
