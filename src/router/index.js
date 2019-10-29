import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Partner from '@/components/Partner'
import Conven from '@/components/Conven'
import Me from '@/components/Me'
import JG_class from '@/pages/JG_class'

Vue.use(Router)

export default new Router({
  routes: [{ //默认页面
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
  }, {
    path: '/partner',
    name: 'Partner',
    component: Partner,
    children: [
      {
        path: '/JGclass',
        name: 'JG_class',
        component: JG_class,
      },
    ]
  }, {
    path: '/conven',
    name: 'Conven',
    component: Conven,
  }, {
    path: '/me',
    name: 'Me',
    component: Me,
  }]

})
