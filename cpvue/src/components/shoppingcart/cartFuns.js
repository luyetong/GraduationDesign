import store from '../../store'
import router from '../../router'
import funs from '../../funs'
//加入购物车功能
export default{
    addToCart(data){
      var isLogin = localStorage.getItem("isLogin")
      if(isLogin){ // 已登录
        funs.getAddCart(data, result =>{
          console.log(data)
          store.commit('setCartInfo')
          store.commit('setIsCartOpen','block')
          // setInterval(()=>{
          //   store.commit('setIsCartOpen','none')
          // },3000)
        })
      } else { // 未登录
        router.push('/login')
         localStorage.removeItem("isLogin")
      }
    }
}