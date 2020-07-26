<template>
  <div class="wishlist_container">
    <button class="wishlist_action" @click="isLike">
      <div class="wishllist_image hvr-pulse-grow" :class="changeLike"></div>
    </button>
  </div>
</template>
<script>
import funs from '../../funs.js';
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      changeLike:{
        add_wishlist:false,
        remove_wishlist:true
      }
    }
  },
  props:[
    "products",
    "i"
  ],
  methods: {
    isLike(){
      var isLogin = localStorage.getItem("isLogin")
      if(isLogin){
        if(this.changeLike.remove_wishlist){
          this.changeLike.add_wishlist = true
          this.changeLike.remove_wishlist = false
          this.addWishlist()
        }else{
          this.changeLike.add_wishlist = false
          this.changeLike.remove_wishlist = true
          this.removeWishlish()
        }
      }else{
        this.$router.push('/login')
        localStorage.removeItem("isLogin")
      }
    },
    addWishlist(){
      var path = this.$store.state.path
      if(path === '/eyepalettes' || path === '/lips'){
        var {pid} = this.products[this.i]
      }else{
        var {pid} = this.product
      }
      var data = {pid}
      funs.getAddWishlist(data,result=>{
        var wishList = result.data.wishList
        localStorage.setItem('wishListItems',JSON.stringify(wishList))
      })
    },
    removeWishlish(){
      var path = this.$store.state.path
      if(path === '/eyepalettes'|| path === '/lips'){
        var {pid} = this.products[this.i]
      }else{
        var {pid} = this.product
      }
      funs.getRemoveWishlist(pid,result=>{
        var wishListItems = result.data.wishList
        console.log(wishListItems)
        localStorage.setItem('wishListItems',JSON.stringify(wishListItems))
      })
      // this.setRemoveWishListInfo(pid)
    },
    isLoad(){
      var wishList = JSON.parse(localStorage.getItem('wishListItems'))
      var path = this.$route.path
      if(path === '/eyepalettes'|| path === '/lips'){
        var {pid} = this.products[this.i]
      }else{
        var {pid} = this.product
      }
      if(wishList){
        for(var k of wishList){
          if(k.pid === pid){
            this.changeLike.add_wishlist = true
            this.changeLike.remove_wishlist = false
          }
        }
      }
    },
    // lateLoad(){
    //   let changeThis = this
    //   setTimeout(function(){
    //     changeThis.isLoad()
    //   },300)
    // },
    ...mapMutations(['setAddWishLishInfo','setRemoveWishListInfo','setWishlistInfo'])
  },
  computed: {
    ...mapState(['wishList','product'])
  },
  created() {
    // this.lateLoad()
    this.isLoad()
  },
}
</script>
<style scoped>
.wishlist_container {
  width: 20px;
  height: 20px;
  position: absolute;
}
.wishlist_container button {
  background-color: transparent;
  border: 0px;
  outline: none;
}
.wishlist_container .wishlist_action .wishllist_image {
  background-color: transparent;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
}
.wishlist_container .wishlist_action .wishllist_image .iconxin {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
}
.wishlist_container .wishlist_action .wishllist_image:hover {
  background-image: url("../../assets/img/icon/xin_black.png");
}
.add_wishlist {
  background-image: url("../../assets/img/icon/xin_black.png");
}
.remove_wishlist{
  background: url("../../assets/img/icon/xin.png");
}
</style>