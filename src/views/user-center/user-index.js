import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './user-indexApp'
// import security from './router/user/user-security'
// import capital from './router/user/user-capital'
// import jifen from './router/user/user-jifen'
// import hongbao from './router/user/user-hongbao'
// import promote from './router/user/user-promote'
import $ from 'jquery'
// const App = resolve => require(['./user-indexApp'],resolve)
const security = resolve => require(['./router/user/user-security'], resolve)
const capital = resolve => require(['./router/user/user-capital'], resolve)
const jifen = resolve => require(['./router/user/user-jifen'], resolve)
const hongbao = resolve => require(['./router/user/user-hongbao'], resolve)
const promote = resolve => require(['./router/user/user-promote'], resolve)
const routes = [{
    path: '/',
    component: App
  },
  {
    path: '/user-security',
    component: security,
    name: 'security'
  },
  {
    path: '/user-capital',
    component: capital,
    name: 'component'
  },
  {
    path: '/user-jifen',
    component: jifen,
    name: 'jifen'
  },
  {
    path: '/user-hongbao',
    component: hongbao,
    name: 'hongbao'
  },
  {
    path: '/user-promote',
    component: promote,
    name: 'promote'
  }
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes
})

new Vue({
  router: router
}).$mount('#app')
