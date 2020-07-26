<template>
  <div class="collectioncontainer">
    <div class="productblock" v-for="(p,i) of products" :key="i">
      <div class="imagecontainer">
        <router-link :to="'/details/'+p.pid">
          <div class="image-swapper">
            <img :src="'http://localhost:4000/' + p.pic" class="hvr-grow-shadow"/>
          </div>
        </router-link>
      </div>
      <div class="product-info" id="info-container">
        <like :i="i" :products="products"></like>
        <div class="product-info-inner">
          <div class="prod-info-wrap">
            <div class="prod-title-wrap">
              <div id="prod-title-price">{{p.name}}</div>
              <p id="prod-type">{{p.category}}</p>
            </div>
            <div class="price">
              <span class="price-og" v-show="p.sale_price?true:false">¥{{p.sale_price}}</span>
              ¥{{p.price}}
            </div>
            <div class="yotpo">
              <el-rate
              v-model="p.review"
              disabled
              show-score
              text-color="#fff"
              score-template="{value}">
            </el-rate>
            </div>
          </div>
          <form action>
            <addToBag class="add-tobag" @click.native="addTocart(i)"></addToBag>
            <button class="quick-view">Quickview</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import like from './like'
import addToBag from './addToBag'
import cartFuns from '../shoppingcart/cartFuns'
export default {
  props:[
    "products"
  ],
  components:{
    like,
    addToBag
  },
  methods:{
    addTocart(i){
        var productInfo = this.products[i]
        cartFuns.addToCart(productInfo)
      }
  }
}
</script>
<style scoped>
.collectioncontainer {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.collectioncontainer .productblock {
  box-sizing: border-box;
  position: relative;
  padding: 0 10px;
}
.wishlist_container{
  right: 10%;
}
@media screen and (min-width: 1220px) {
  .collectioncontainer .productblock {
    width: 20%;
  }
}
@media screen and (max-width: 1220px) {
  .collectioncontainer .productblock {
    width: 33%;
  }
}
@media screen and (min-width: 768px) {
  .add-tobag{
    width: 48%;
  }
  .collectioncontainer
    .productblock
    .product-info
    .product-info-inner
    form
    .quick-view {
    width: 48%;
    font: 11px/1 "VisbyCFBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    padding: 13px 5px;
    background: transparent;
    color: #333;
    border: solid 1px #333;
    cursor: pointer;
    outline-color: #d9ccf1;
  }
  .collectioncontainer
    .productblock
    .product-info
    .product-info-inner
    form
    .quick-view:hover {
    background: #333;
    color: #fff;
  }
}
@media screen and (max-width: 768px) {
  .add-tobag{
    width: 100%;
  }
  .collectioncontainer
    .productblock
    .product-info
    .product-info-inner
    form
    .quick-view {
    display: inline-block;
    background-color: transparent;
    border: none;
    margin: 20px 0;
    text-decoration: underline;
    text-transform: lowercase;
    cursor: pointer;
  }
  .collectioncontainer
    .productblock
    .product-info
    .product-info-inner
    form
    .quick-view:hover {
    color: #999;
  }
}
.productblock .image-swapper {
  width: 100%;
}
.productblock .image-swapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.collectioncontainer .productblock .product-info-inner {
  text-align: left;
}
.collectioncontainer .productblock .product-info-inner .prod-info-wrap {
  display: block;
  min-height: 150px;
}
.product-info a {
  text-transform: uppercase;
}
.product-info {
  margin: 20px 0 30px 0;
}
.product-info .product-info-inner .prod-title-wrap #prod-title-price {
  font: 12px "VisbyCFExtraBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 1em 0 0.4em 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  max-width: 90%;
  color: #333;
  font-weight: bold;
  width: 185px;
}
.product-info .product-info-inner .prod-title-wrap #prod-type {
  color: #333;
  font: 11px/1.4 "VisbyCFMedium", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  text-transform: uppercase;
  max-width: 92%;
  font-weight: 300;
}
.product-info .price-og {
  text-decoration: line-through;
  color: #999;
  font: 1em "VisbyCFDemiBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-right: 0.6em;
}
.product-info .product-info-inner .price {
  font: 0.75em "VisbyCFDemiBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 1em 0 1em 0;
}
.price {
  color: #222;
  background: transparent;
  position: relative;
  padding: 0;
  margin: 0;
  width: auto;
  bottom: 0;
}
.collectioncontainer .productblock .product-info-inner form {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px !important;
  justify-content: space-between;
}
input[type="submit"] {
  font: 0.8em/1 "VisbyCFBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  padding: 13px 5px;
  background: transparent;
  color: #333;
  border: solid 1px #333;
  cursor: pointer;
  border-radius: 0;
  letter-spacing: 0.0625em;
  transition: all 0.2s ease;
}
input[type="submit"]:hover {
  background: #333;
  color: #fff;
}
</style>