import Vue from 'vue'
import Router from 'vue-router'
import homeChild from './views/home/homeChild/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=> import ("./views/home/home.vue"),
      children:[
        {
          path:"/homeChild",
          name:"homeChild",
          component:homeChild
        }
      ]
    },
    {
      path:"/mine",
      name:'mine',
      component:() =>import('./views/mine/mine.vue')
    },
    {
      path:"/news",
      name:"news",
      component:() => import("./views/news/index.vue")
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
