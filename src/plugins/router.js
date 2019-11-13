import Vue from 'vue'
import VueRouter from 'vue-router'

import NoRoute from '@/pages/no-route'
import Home from '@/pages/home'
import About from '@/pages/about'

Vue.use(VueRouter)

const routes = [
    { path: '*', component: NoRoute },
    { path: '/', component: Home },
    { path: '/about', component: About }
]

export default new VueRouter({
    mode: 'history',
    routes
})
