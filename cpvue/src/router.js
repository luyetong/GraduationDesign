import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import LoginReg from './views/LoginReg'
import PersonalAccount from './views/PersonalAccount'
import Details from './views/Details'
import EyePalettes from './views/EyePalettes'
import Lips from './views/Lips.vue'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [{
      path: "/",
      component: Index
    },
    {
      path: "/index",
      component: Index
    },
    {
      path: "/login",
      component: LoginReg,
      name: 'login'
    },
    {
      path: '/account',
      component: PersonalAccount,
      name: 'account'
    },
    {
      path: "/eyepalettes",
      component: EyePalettes,
      name: 'eyepalettes'
    },
    // {
    //   path: "/eyepalettes",
    //   component: EyePalettes,
    //   name: 'eyepalettes',
    //   children: [
    //     {path:'/details/:pid',
    //     component:Details,
    //     name:'details',
    //     props: true,
    //     }
    //   ]
    // },
    {
      path: "/lips",
      component: Lips,
      name: 'lips',
    },
    {
      path: "/details/:pid",
      component: Details,
      props: true,
      name: 'details'
    },
    {
      path: "*",
      component: NotFound
    },

  ]
})