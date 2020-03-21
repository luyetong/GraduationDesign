import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import LoginReg from './views/LoginReg'
import PersonalAccount from './views/PersonalAccount'
import Details from './views/Details'
import EyePalettes from './views/EyePalettes'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/login",component:LoginReg},
    {path:'/account',component:PersonalAccount},
    {path:"/eyepalettes",component:EyePalettes},
    {path:"/details/:pid",component:Details,props:true},
    {path:"*",component:NotFound},
    
  ]
})
