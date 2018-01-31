import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './news-indexApp'
import $ from 'jquery'
import list from './news-articleApp'

const routes=[
  {path: '/',component: App},
  {path: '/news-article',component: list,}
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes:routes
})

new Vue({
  router: router
}).$mount('#app')
