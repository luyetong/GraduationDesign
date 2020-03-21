import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import MyHeader from './components/MyHeader'
import Header from './components/Header'
import Footer from './components/Footer'
//引入axios
import axios from './axios'
// iconfont 文件引入
import './assets/iconfont/iconfont'
import './assets/iconfont/colourpop_icon.css'
import './assets/common/common.css'
//elementUI组件库引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.prototype.axios = axios;
axios.defaults.baseURL="http://localhost:4000"

Vue.component('myheader',Header)
// Vue.component("my-header",MyHeader)
Vue.component("myfooter",Footer)

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  store.state.path=to.path
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
