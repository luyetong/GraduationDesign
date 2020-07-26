<template>
  <div class="page-container">
    <main class="main-content">
      <div class="shopify-section-product-colourpop">
        <section class="product--colourpop">
          <article class="product-details">
            <div class="showtablet">
              <div class="product-details-info">
                <h1 class="product-details_title">{{this.product.name}}</h1>
                <label class="product-details_type">{{product.category}}</label>
              </div>
              <div class="product-details-prices">
                <label for class="product-details_price-sale">
                  <span class="price-sale">¥{{product.price}}</span>
                </label>
              </div>
              <div class="product-details-afterpay">
                <p class="afterpay-paragraph">available for order between $35 - $1000</p>
              </div>
            </div>
            <div class="product-details_left">
              <div class="product-images">
                <img :src="'http://localhost:4000/'+product.pic" alt=""/>
              </div>
            </div>
            <div class="product-details_right">
              <div class="product-details-info hidetablet">
                <h1 class="product-details_title">{{product.name}}</h1>
                <label class="product-details_type">{{product.category}}</label>
              </div>
              <div class="product-details-prices hidetablet">
                <label for class="product-details_price-sale">
                  <span class="price-sale">¥{{product.price}}</span>
                </label>
              </div>
              <div class="product-details-afterpay hidetablet">
                <p class="afterpay-paragraph">available for order between $35 - $1000</p>
              </div>
              <form action class="product-details-actions">
                <div id="quantity">
                  <el-input-number size="mini" :min="1" v-model="getNum" @change="handleChange"></el-input-number>
                </div>
                <div class="product-actions_buttons">
                  <button class="btn hvr-grow-shadow" @click="add">Add to bag</button>
                </div>
              </form>
              <div class="product-details-wishlish">
                <like :product="product"></like>
              </div>
              <div class="product-details-description">
                <div class="product-details-description-text">
                  <p>{{product.title}}</p>
                </div>
              </div>
              <div class="product-details-reviews">
                <div class="yotpo">
                  <el-rate
                    v-model="product.review"
                    disabled
                    show-score
                    text-color="#fff"
                    score-template="{value}">
                  </el-rate>
                </div>
                <router-link to="" class="text-m">2126 Review</router-link>
              </div>
              <div class="product-details-social">
                <ul>
                  <li>
                    <router-link to="" class="footer_social-facebook hvr-float">
                      <svg class="iconfacebook_product" aria-hidden="true">
                        <use xlink:href="#iconfacebook" />
                      </svg>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="" class="footer_social-facebook hvr-float">
                      <svg class="iconpinterest_product" aria-hidden="true">
                        <use xlink:href="#iconpinterest" />
                      </svg>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="" class="footer_social-facebook hvr-float">
                      <svg class="iconttww_product" aria-hidden="true">
                        <use xlink:href="#iconttww" />
                      </svg>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item :title="product.category" name="1">
                <div>finish</div>
                <p>{{product.finish}}</p>
                <div>PRESSED POWDER SHADOW</div>
                <p>{{product.detail}}</p>
                <p>{{product.shade}}</p>
                <div>net weight</div>
                <p>{{product.net_weigth}}</p>
              </el-collapse-item>
              <el-collapse-item title="ingredients" name="2">
                <p>{{product.ingredients}}</p>
              </el-collapse-item>
              <el-collapse-item title="applicant tips" name="3">
                <div>Tip:</div>
                <p>{{product.tips}}</p>
              </el-collapse-item>
            </el-collapse>
          </article>
          <!-- <article class="product-complete" style="block">
            <h2 class="product-title">
              <span>complete you look</span>
            </h2>
            <div class="product-complete_container">
              <div class="owl-carousel">
                <div class="owl-stage-outer">
                  <div class="owl-carousel_item">
                    <div class="carousel-product_image">
                      <a href="javascrip:;">
                        <img class="owl-lazy" src="../assets/img/colours/COLOUR ME HAPPY.jpg" alt />
                      </a>
                    </div>
                    <div class="carousel-product_info">
                      <div class="wishlist_container">
                        <button class="wishlist_action" href>
                          <div class="wishllist_image"></div>
                        </button>
                      </div>
                      <label class="carousel-product_info--title">COLOUR ME HAPPY</label>
                      <label class="carousel-product_info--type">PALETTE</label>
                      <label class="carousel-product_info--price">
                        <span price-og>$38</span>
                      </label>
                      <div class="yotpo">
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                      </div>
                    </div>
                    <div class="carousel-product_action">
                      <form action class="carousel-product_action--form">
                        <input type="submit" class="btn" value="add to bag" />
                      </form>
                    </div>
                  </div>
                  <div class="owl-carousel_item">
                    <div class="carousel-product_image">
                      <a href="javascrip:;">
                        <img class="owl-lazy" src="../assets/img/sol/caramel.jpg" alt />
                      </a>
                    </div>
                    <div class="carousel-product_info">
                      <div class="wishlist_container">
                        <button class="wishlist_action" href>
                          <div class="wishllist_image"></div>
                        </button>
                      </div>
                      <label class="carousel-product_info--title">caramel</label>
                      <label class="carousel-product_info--type">SOL GLOW OIL</label>
                      <label class="carousel-product_info--price">
                        <span price-og>$15</span>
                      </label>
                      <div class="yotpo">
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                      </div>
                    </div>
                    <div class="carousel-product_action">
                      <form action class="carousel-product_action--form">
                        <input type="submit" class="btn" value="add to bag" />
                      </form>
                    </div>
                  </div>
                  <div class="owl-carousel_item">
                    <div class="carousel-product_image">
                      <a href="javascrip:;">
                        <img class="owl-lazy" src="../assets/img/colours/COLOUR ME HAPPY.jpg" alt />
                      </a>
                    </div>
                    <div class="carousel-product_info">
                      <div class="wishlist_container">
                        <button class="wishlist_action" href>
                          <div class="wishllist_image"></div>
                        </button>
                      </div>
                      <label class="carousel-product_info--title">COLOUR ME HAPPY</label>
                      <label class="carousel-product_info--type">PALETTE</label>
                      <label class="carousel-product_info--price">
                        <span price-og>$38</span>
                      </label>
                      <div class="yotpo">
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                      </div>
                    </div>
                    <div class="carousel-product_action">
                      <form action class="carousel-product_action--form">
                        <input type="submit" class="btn" value="add to bag" />
                      </form>
                    </div>
                  </div>
                  <div class="owl-carousel_item">
                    <div class="carousel-product_image">
                      <a href="javascrip:;">
                        <img class="owl-lazy" src="../assets/img/colours/COLOUR ME HAPPY.jpg" alt />
                      </a>
                    </div>
                    <div class="carousel-product_info">
                      <div class="wishlist_container">
                        <button class="wishlist_action" href>
                          <div class="wishllist_image"></div>
                        </button>
                      </div>
                      <label class="carousel-product_info--title">COLOUR ME HAPPY</label>
                      <label class="carousel-product_info--type">PALETTE</label>
                      <label class="carousel-product_info--price">
                        <span price-og>$38</span>
                      </label>
                      <div class="yotpo">
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                      </div>
                    </div>
                    <div class="carousel-product_action">
                      <form action class="carousel-product_action--form">
                        <input type="submit" class="btn" value="add to bag" />
                      </form>
                    </div>
                  </div>
                  <div class="owl-carousel_item">
                    <div class="carousel-product_image">
                      <a href="javascrip:;">
                        <img class="owl-lazy" src="../assets/img/colours/COLOUR ME HAPPY.jpg" alt />
                      </a>
                    </div>
                    <div class="carousel-product_info">
                      <like></like>
                      <label class="carousel-product_info--title">caramel</label>
                      <label class="carousel-product_info--type">SOL GLOW OIL</label>
                      <label class="carousel-product_info--price">
                        <span price-og>$15</span>
                      </label>
                      <div class="yotpo">
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                        <svg class="iconstar_black" aria-hidden="true">
                          <use xlink:href="#iconstar_black" />
                        </svg>
                      </div>
                    </div>
                    <div class="carousel-product_action">
                      <form action class="carousel-product_action--form">
                        <input type="submit" class="btn" value="add to bag" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article> -->
        </section>
      </div>
    </main>
  </div>
</template>
<script>
import funs from "../funs.js";
import cartFuns from '../components/shoppingcart/cartFuns'
import like from '../components/common/like'
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      pics: [],
      getNum:1,
      value5: 3.7,
      activeNames: ['1'],
    };
  },
  components:{
    like
  },
  methods: {
    handleChange (value) {

    },
    load() {
      funs.getDetails(this.pid, result => {
      //   console.log(result)
       // console.log(this.result.data.data);
      //   console.log(result.data.product[0]);
        //如果以后使用server
        this.product = result.data.product[0]
        console.log(this.product)
      });
    },

    //加入购物车
    add() {    // 整理商品数据
        var { cid, category, pid, price, sale_price, name, small, pcount } = this.product
        var num = this.getNum
        var data = {
          cid,
          category,
          pid,
          price,
          sale_price,
          name,
          small,
          num,
          pcount:this.getNum
        }
        cartFuns.addToCart(data)
    },
    ...mapMutations(['setProductInfo'])
  },
  computed: {
    ...mapState(['product'])
  },
  props: ["pid"],
  created() {
    this.setProductInfo(this.pid)
  },
  watch: {
    pid() {
      this.load();
    }
  }
};
</script>
<style scope>
p {
  color: #333;
  margin: 0 0 20px;
  display: block;
  line-height: 1.5;
}
.page-container {
  position: relative;
  width: 100%;
  margin-bottom: 50px;
}
.product-details {
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
}

/*左边栏*/
.product-details_left .product-images img {
  width: 600px;
}
/*右边栏*/
.product-details_right {
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 470px;
}
.product-details-info .product-details_title {
  text-transform: lowercase;
  font: 22px "Visby CF Extra Bold", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  text-align: center;

  font-size: 28px;
  margin: 10px auto;
  font-weight: bold;
}
.product-details-info .product-details_type {
  text-transform: lowercase;
  font: 13px "Visby CF Medium", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #111;
  font-size: 14px;
  margin: 0 auto 20px auto;
  font-size: 14px;
}
label {
  display: block;
  margin-bottom: 5px;
}
.product-details-prices .product-details_price-sale .price-sale {
  text-align: center;
  font: 18px "Visby CF Extra Bold", "Helvetica Neue", Helvetica, Arial,
    sans-serif;

  font-weight: bold;
  font-size: 23px;
  margin-bottom: 10px;
}
.product-details-afterpay .afterpay-paragraph {
  font: 0.7em/1 "Visby CF Demi Bold", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  text-align: center;
}
.product-details-actions .el-input-number--mini{
  width: 100%;
  line-height: 40px;
}
.product-details-actions .el-input-number .el-input{
  margin-bottom: 10px;
}
.product-details-actions .el-input--mini .el-input__inner{
  height: 35px;
  line-height: 35px;
  border-left: transparent;
  border-right: transparent;
}
.product-details-actions #quantity .el-input__inner{
  border-top: 1px solid #111111;
  border-bottom: 1px solid #111111;
  border-left: transparent;
  border-right: transparent;
}
.text-link {
  display: inline;
  border: 0 none;
  background: none;
  padding: 0;
  margin: 0;
  text-decoration: underline;
  font-weight: 500;
  background: transparent;
  color: #111;
}
.product-actions_buttons .btn {
  width: 100%;
  background: #111;
  color: #fff;
  padding: 13px 5px;
  font-size: 14px;
  border: none;
}
.product-details-wishlish {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.product-details-description {
  font-size: 13px;
  text-align: left;
}
.product-details-description-text,
.product-details-reviews {
  margin: 20px 0;
}
.product-details-reviews {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.product-details-reviews .text-m {
  display: inherit;
  font: 13px "Visby CF Bold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: lowercase;
  color: #222;
  margin-left: 8px;
}
.product-details-reviews .text-m:hover {
  text-decoration: underline;
}
.product-details-social ul {
  margin: 40px 0 20px 0;
  width: 100%;
}
.product-details-social ul li {
  display: inline-block;
  margin: 0 0.5em;
}
/*推荐商品*/
.product-complete {
  width: 100%;
  position: relative;
}
.product-complete_container {
  width: 100%;
  position: relative;
}
.product-complete_container .owl-carousel .owl-stage-outer {
  display: flex;
}
.product-title {
  position: relative;
  font: 22px "Visby CF Extra Bold", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  text-align: center;

  font-size: 28px;
  margin: 60px 0 30px 0;
  font-weight: bold;
}

.product-title::before {
  content: "";
  display: inline-block;
  width: calc(40% - 50px);
  height: 1px;
  background: #333;
  position: absolute;
  top: 60%;
  left: 20px;
  transform: translateY(-50%);
  margin-left: 20px;
}
.product-title::after {
  content: "";
  display: inline-block;
  width: calc(40% - 50px);
  height: 1px;
  background: #333;
  position: absolute;
  top: 60%;
  right: 20px;
  transform: translateY(-50%);
  margin-right: 20px;
}
.product-title span {
  background: #fff;
  display: inline-block;
  padding: 0 10px;
}
.owl-carousel {
  padding: 0 40px;
}

.carousel-product_image img {
  width: 100%;
}
.product-details-wishlish .wishlist_container {
  width: 20px;
  height: 20px;
  position: absolute;
}
.carousel-product_info .wishlist_container {
  width: 20px;
  height: 20px;
  right: -1px;
  position: absolute;
}
.wishlist_container button {
  background-color: transparent;
  border: 0px;
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
  background-image: url("../assets/img/icon/xin_black.png");
}
.owl-carousel .owl-carousel_item .carousel-product_info {
  margin-top: 1em;
  min-height: 130px;
  text-align: center;
}
.owl-carousel
  .owl-carousel_item
  .carousel-product_info
  .carousel-product_info--title {
  font: 14px/1.2 "Visby CF Extra Bold";
  text-transform: lowercase;
  width: 86%;
  margin: 0 auto 5px auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bolder;
}
.owl-carousel
  .owl-carousel_item
  .carousel-product_info
  .carousel-product_info--type {
  font-size: 11px;
  text-transform: lowercase;
  width: 100%;
}
.owl-carousel
  .owl-carousel_item
  .carousel-product_info
  .carousel-product_info--price {
  font-size: 11px;
  margin: 10px 0;
}
.owl-carousel
  .owl-carousel_item
  .carousel-product_info
  .carousel-product_info--type,
.carousel-product_info--price {
  font-family: "Visby CF Medium";
  color: #111;
  letter-spacing: 0.06em;
  font-weight: 200;
}
.owl-carousel
  .owl-carousel_item
  .carousel-product_action
  .btn {
  width: 100%;
}
.btn {
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
.btn:hover {
  background: #333;
  color: #fff;
}
/*响应式*/
@media screen and (min-width: 1220px) {
  .showtablet {
    display: none;
  }
  .product-details_left .product-images img {
    width: 600px;
  }
  .product-details_left {
    width: calc(100% / 2.5 * 1.5);
    margin: 0px;
    padding: 0 5%;
  }
  .owl-carousel .owl-carousel_item {
    width: calc((100vw - (90px)) * 1 / 5);
    position: relative;
  }
  .owl-carousel .owl-carousel_item:not(:first-child) {
    margin-left: 30px;
  }
}
@media screen and (max-width: 1220px) {
  .showtablet {
    width: 100%;
    text-align: center;
  }
  .product-details {
    flex-direction: column;
    justify-content: center;
  }
  .product-details_left {
    margin: 0 auto;
  }
  .product-details_left .product-images img {
    width: 320px;
  }
  .product-details_right {
    padding: 0 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
  }
  .hidetablet {
    display: none;
  }
  .owl-carousel .owl-carousel_item {
    width: calc((100vw - (60px)) * 1 / 4);
    position: relative;
  }
  .owl-carousel .owl-carousel_item:not(:first-child) {
    margin-left: 20px;
  }
  .owl-carousel .owl-stage-outer .owl-carousel_item:last-child {
    display: none;
  }
}
@media screen and (max-width: 740px) {
  .owl-carousel .owl-carousel_item {
    width: calc((100vw - (60px)) * 1 / 2);
    position: relative;
  }
  .owl-carousel .owl-carousel_item:not(:first-child) {
    margin-left: 20px;
  }
  .owl-carousel
    .owl-stage-outer
    .owl-carousel_item:nth-child(2)
    ~ .owl-carousel_item {
    display: none;
  }
}
.el-collapse{
  width: 100%;
}
.product-details .el-collapse-item__header{
  background-color: #f3edff;
  border-top: 1px solid #111;
  justify-content: center;
  font: 16px "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: bolder;
  padding-left: 20px;
}
.product-details .el-icon-arrow-right:before{
  content: ''
}
.product-details .el-collapse-item__wrap{
  background-color: #f3edff;
  padding: 0px 20px;
}
.product-details .el-collapse-item__content{
  text-align: center;
}
.product-details .el-collapse-item__content div{
    font: 10px "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    font-weight: 500;
}
.product-details .el-collapse-item__content p{
  font:12px/1.5 "Visby CF Medium","Helvetica Neue",Helvetica,Arial,sans-serif;
  text-transform: lowercase;
  font-weight:unset;
}
</style>