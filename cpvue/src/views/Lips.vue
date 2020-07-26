<template>
  <main class="page-wrap">
    <div id="collection-description" class="collection">
      <h1 class="collection-title">lips</h1>
    </div>
    <div id="shopify-section-collection" class="shopify-section">
      <section id="content" class="d-content">
        <div class="collection-tabs_container">
          <div class="owl-theme">
            <div class="owl-stage-outer">
              <div class="owl-stage">
                <div class="owl-item" v-for="(item,k) of items" :key="k">
                  <li class="collection-tabs_item" @click="choseLip(k)">
                    <router-link to="">{{item}}</router-link>
                  </li>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
          <productBlock :products="products"></productBlock>
          <div class="nomoreproducts">No more products to show</div>
      </section>
    </div>
  </main>
</template>
<script>
import funs from "../funs.js"
import cartFuns from '../components/shoppingcart/cartFuns'
import like from "../components/common/like"
import addToBag from "../components/common/addToBag"
import productBlock from '../components/common/productBlock'

export default {
  data(){
    return{
      items:['Lipstick','Lippie Pencil','Liquid Lipsticks'],
      products:[],
      lipsticks:[],
      liquids:[]
      }
    },
    components:{
      like,
      addToBag,
      productBlock
    },
    methods: {
      choseLip(k){
        console.log(k)
        if(k===0){
          this.products = this.lipsticks
        }else if(k===2){
          this.products = this.liquids
        }
      },
      load() {
        funs.getLips(result=>{
          // console.log(result.data.eyepalettes)
          this.products = result.data.lips
          this.lipsticks = result.data.lips
        })
        funs.getLiquids(result=>{
          this.liquids = result.data.lips
        })
      },
      // addTocart(i){
      //   var productInfo = this.products[i]
      //   cartFuns.addToCart(productInfo)
      // }
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
.nomoreproducts {
  clear: both;
  text-align: center;
  padding-bottom: 40px;
  text-transform: uppercase;
  font: 0.875em "VisbyCFExtraBold-Obl", Helvetica, Arial, sans-serif;
  position: relative;
  font-style: italic;
  font-weight: bold;
}
.nomoreproducts:after {
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