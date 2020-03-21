<template>
  <div class="wishListItems_wrap">
    <div class="wishlistItem" v-for="(w,i) of wishListItems" :key="i">
      <button @click="removeItem(i)">
        <svg class="iconicon-close-small" aria-hidden="true">
          <use xlink:href="#iconicon-close"></use>
        </svg>
      </button>
      <router-link :to="'/details/'+w.href.split('=')[1]">
        <div class="itemImgContainer">
          <img :src="'http://localhost:4000/' + w.pic" alt="">
        </div>
      </router-link>
      <div class="wishlistContent">
        <p class="itemName">{{w.name}}</p>
        <p class="itemCategory">{{w.category}}</p>
        <p class="itemPrice">${{w.price}}</p>
      </div>
      <addToBag @click.native="addToBag(i)"></addToBag>
    </div>
  </div>
</template>
<script>
import funs from '../../funs'
import addToBag from '../common/addToBag'
import cartFuns from '../shoppingcart/cartFuns'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      wishListItems:[]
    }
  },
  components:{
    addToBag
  },
  methods: {
    isLoad(){
      this.$store.commit('setWishlistInfo')
      this.wishListItems=this.$store.state.wishList
    },
    removeItem(i){
      var {pid} = this.wishListItems[i]
      this.$store.commit('setRemoveWishListInfo',pid)
      this.wishListItems.splice(i,1)
    },
    addToBag(i){
      var wishListItem = this.wishListItems[i]
      cartFuns.addToCart(wishListItem)
    }
  },
  computed: {
  },
  created() {
    this.isLoad()
  },
}
</script>
<style scoped>
.wishListItems_wrap{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.wishlistItem{
  width: 31%;
  display: flex;
  flex-direction: column;
  margin: 0px 5px;
  position: relative;
}
.wishlistItem button{
  width: 20px;
  border: none;
  outline-color: #d9ccf1;
  cursor: pointer;
  position: absolute;
  right: 3%;
  background-color: transparent;
}
.wishlistItem .itemImgContainer{
  width: 100%;
}
.wishlistItem .itemImgContainer img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.wishlistItem .wishlistContent{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 0 20px 0;
}
.wishlistItem .wishlistContent p{
  width: 100%;
  text-align: center;
  text-transform: lowercase;
  font-size: 11px;
  margin-bottom: 2px;
}
.wishlistItem .wishlistContent .itemName{
  font:14px/1.2 "Visby CF Extra Bold";
  font-weight: bolder;
}
</style>