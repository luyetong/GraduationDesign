import Vue from 'vue'
import Vuex from 'vuex'
import funs from './funs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personalinfo:{},  //用户信息
    cartList:[],      //购物车列表商品信息
    isLogin: false,
    path: '',
    activeName:'first',
    isLike:false,
    wishList:[],   //心愿单信息
    product:{} , //商品详情信息
    isOpenCart:{display:'none'}
  },
  mutations: {
    //1.改变登录状态
    setIsLogin (state, flag) {
      state.isLogin = flag
    },
    //2.改变下拉栏状态
    setAccountItem (state, item) {
      state.activeName = item
    },
    //3.改变用户信息
    setPersonalInfo(state) {
      funs.getAccount(result=>{
        state.personalinfo = result.data.personalinfo[0]
      })
    },
    //4.加载商品详情信息
    setProductInfo(state,pid){
      funs.getDetails(pid, result => {
          state.product = result.data.product[0]
          console.log(state.product)
      });
    },
    //5.加载购物车商品信息
    setCartInfo(state){
      funs.getShowcart(result=>{
        state.cartList = result.data.cartList
      })
    },
    //6.加载心愿单信息
    setWishlistInfo(state){
      funs.getShowWishlist(result=>{
        state.wishList = result.data.wishList
      })
    },
    //7.添加心愿单信息
    setAddWishLishInfo(state,data){
      funs.getAddWishlist(data,result=>{
        state.wishList = result.data.wishList
      })
    },
    //8.删除心愿单信息
    setRemoveWishListInfo(state,pid){
      funs.getRemoveWishlist(pid,result=>{
        state.wishList = result.data.wishList
      })
    },
    //9.改变购物车显示状态
    setIsCartOpen(state,status){
      state.isOpenCart.display = status
    },
    //改变心愿单信息
    setIsLike (state , isLike) {
      state.isLike = isLike
    },
  },
  actions: {
  }
})
