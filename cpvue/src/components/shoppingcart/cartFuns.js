import store from '../../store'
import router from '../../router'
import funs from '../../funs'
//加入购物车功能
export default{
    addToCart(data){
      if(store.state.isLogin){ // 已登录
        funs.getAddCart(data, result =>{
          store.commit('setCartInfo')
          store.commit('setIsCartOpen','block')
          // setInterval(()=>{
          //   store.commit('setIsCartOpen','none')
          // },3000)
        })
      } else { // 未登录
        router.push('/login')
          // // console.log(data)
        // // 获取本地cart的信息
        // var cartInfo = localStorage.getItem('cart')
        // // console.log(cartInfo)
        // //如果之前没添加过商品
        // if (cartInfo === null) {
        //   localStorage.setItem('cart', JSON.stringify([data]))
        // } else {
        // //如果已添加过商品
        //   var cartarr = JSON.parse(cartInfo)
        //   //遍历判断商品有无已被添加
        //   for(let v of cartarr){
        //     //如果已添加过同样的商品
        //     if(v.pid==data.pid){
        //       console.log('已添加')
        //       v.num += data.num
        //       localStorage.setItem('cart', JSON.stringify(cartarr))
        //       return
        //     }
        //   }
        //   //如果没被添加
        //   cartarr.push(data)
        //   localStorage.setItem('cart', JSON.stringify(cartarr))
        // }
      }
    }
}