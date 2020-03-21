<template>
  <main class="page-wrap">
    <div id="collection-description" class="collection">
      <h1 class="collection-title">Eyeshadow Palettes</h1>
    </div>
    <div id="shopify-section-collection" class="shopify-section">
      <section id="content" class="d-content">
        <div class="collection-tabs_container">
          <div class="owl-theme">
            <div class="owl-stage-outer">
              <div class="owl-stage">
                <div class="owl-item" v-for="(item,k) of items" :key="k">
                  <li class="collection-tabs_item">
                    <a href="#">{{item}}</a>
                  </li>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="collectioncontainer">
          <div class="productblock" v-for="(p,i) of products" :key="i">
            <div class="imagecontainer">
              <router-link :to="'/details/'+p.href.split('=')[1]">
                <div class="image-swapper">
                  <img :src="'http://localhost:4000/' + p.pic" alt />
                </div>
              </router-link>
            </div>
            <div class="product-info" id="info-container">
              <like :i="i" :products="products"></like>
              <div class="product-info-inner">
                <a href="###" class="prod-info-wrap">
                  <div class="prod-title-wrap">
                    <div id="prod-title-price">{{p.name}}</div>
                    <p id="prod-type">{{p.category}}</p>
                  </div>
                  <div class="price">
                    <span class="price-og">${{p.sale_price}}</span>
                    ${{p.price}}
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
                </a>
                <form action>
                  <addToBag @click.native="addTocart(i)"></addToBag>
                  <button class="quick-view">Quickview</button>
                </form>
              </div>
            </div>
          </div>
          
          <div class="nomoreproducts">No more products to show</div>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
import funs from "../funs.js"
import cartFuns from '../components/shoppingcart/cartFuns'
import like from "../components/common/like"
import addToBag from "../components/common/addToBag"

export default {
  data(){
    return{
      items:['shadow palettes','super shock shadow','pressed powder shadow','jelly much shadow','loose shadow','eyeliner','mascara','brow','sets','liquid eye shadow','build your own palette'],
      products:[]
      }
    },
    components:{
      like,
      addToBag
    },
    methods: {
      load() {
        funs.getEyePalettes(result=>{
          // console.log(result.data.eyepalettes)
          this.products = result.data.eyepalettes 
        })
      },
      addTocart(i){
        var productInfo = this.products[i]
        cartFuns.addToCart(productInfo)
      }
    },
    created() {
      this.load()
    },
  }

</script>
<style scoped>
.page-wrap {
  width: 100%;
}
#collection-description {
  display: block;
  position: relative;
}
#collection-description.collection {
  margin: 20px auto 0 auto;
}
#collection-description h1 {
  text-align: center;
}
#collection-description .collection-title {
  color: #333;
  font: 1.4em "VisbyCFExtraBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: 0.1em;
  text-transform: lowercase;
  font-weight: bold;
  margin-bottom: 10px;
}
.shopify-section {
  width: 100%;
}
.collection-tabs_container {
  display: block;
  border-bottom: 1px solid #f8f8f8;
  padding: 20px 0 15px 40px;
  position: relative;
  box-sizing: border-box;
}
.collection-tabs_container .owl-stage-outer {
  position: relative;
}
.owl-item {
  float: left;
  width: auto;
  height: 19px;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.collection-tabs_container .owl-stage .owl-item li {
  list-style: none;
  font: 11px "VisbyCFBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  border-bottom: solid 1px transparent;
  transition: all 0.2s ease;
  padding: 0 15px;
  border-right: 1px solid #999;
}
.collection-tabs_container .owl-item li a {
  color: #999;
  border-bottom: solid 2px transparent;
  padding: 0 0 2px 0;
}
.collection-tabs_container .owl-item li a:hover {
  color: #333;
  border-bottom: solid 2px #333;
}
.collectioncontainer {
  padding: 0 10px;
  position: relative;
}
.collectioncontainer .productblock {
  box-sizing: border-box;
  float: left;
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
  .collectioncontainer .product-info-inner form input[type="submit"] {
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
  .collectioncontainer .product-info-inner form input[type="submit"] {
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
  min-height: 122px;
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

.collectioncontainer .nomoreproducts {
  clear: both;
  text-align: center;
  padding-bottom: 40px;
  text-transform: uppercase;
  font: 0.875em "VisbyCFExtraBold-Obl", Helvetica, Arial, sans-serif;
  position: relative;
  font-style: italic;
  font-weight: bold;
}
.collectioncontainer .nomoreproducts:after {
  content: "";
  display: block;
  width: 250px;
  background: #f3edff;
  height: 7px;
  z-index: -1;
  position: absolute;
  top: 11px;
  left: 50%;
  transform: translateX(-50%);
}
</style>