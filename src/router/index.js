import Vue from 'vue'
import Router from 'vue-router'
import Match from '@/page/match/match'
import User from '@/page/user/user'
import Video from '@/page/video/video'
import All from '@/page/match/children/all'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/match'
    },
    {
      path:'/match',
      component: Match,
      children:[{
      	path:'all',
      	component:All
      }]
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/video',
      component:Video
    }
  ]
})
