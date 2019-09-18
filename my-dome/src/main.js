import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
import {Button,NavBar,Icon ,Tabbar,TabbarItem,Tab,Tabs } from "vant"
import "./assets/css/iconfont.css"

//mock数据
import "./mock/index.js"



// require styles
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper)

Vue.use(Button)
    .use(NavBar)
    .use(Icon)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Tab)
    .use(Tabs)

import Head from "./components/NavBar/index.vue";
Vue.component("Head",Head);

import Footer from "./components/footer/index.vue"
Vue.component("Footer",Footer);

import NavTab from "./components/tab"
Vue.component("NavTab",NavTab);
 
import loading from "./components/loading/loading.js"
Vue.prototype.$loading = loading


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
