<template>
    <main class="homepage">
        <div class="shopify-section">
            <article class="banner-a-wrap">
                <router-link to="">
                    <img src="../assets/img/rainbow_large.jpg" alt="">
                </router-link>
            </article>
        </div>
        <div class="shopify-section">
            <article class="bestseller">
                <div class="bestseller-title">
                    <h3 class="section_title_sidelined">
                        <span>RainbowLand</span>
                    </h3>
                </div>
                <div class="bestseller-container" id="bestseller-container" >
                    <ul @touchmove="move" @touchstart="start" @touchend="end"  class="bestseller-items" id="items" :style="{marginLeft:drag.left+'px'}" >
                        <li class="bestseller-item" v-for="(c,i) of colours" :key="i">
                            <div class="item-img">
                                <img :src="c.cimg" alt="">
                            </div>
                            <div class="item-detail">
                                <div class="item-name">
                                    <h6 class="carousel-prod-title">{{c.cname}}</h6>
                                    <div class="wishlist-container">
                                        <div class="wishllist_image">   
                                        </div>
                                    </div>
                                </div>
                                <p class="carousel-prod-type">{{c.prod_type}}</p>
                                <p class="carousel-prod-price price">${{c.price}}</p>
                                <div class="carousel-prod-description">{{c.description}}
                                </div>
                            </div>
                            <router-link to="" class="item-addtobag">
                                add to bag
                            </router-link>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
        <div class="shopify-section">
            <article class="split-banner">
                <router-link to="" class="split-banner_item">
                    <img src="../assets/img/splite_left.webp" alt="">
                    <div class="split-banner_text-block">
                        <h3>better than a pot of glod</h3>
                        <p>shop she's a rainbow palette</p>
                    </div>
                </router-link>
                <router-link to="" class="split-banner_item">
                    <img src="../assets/img/splite_right.jpg" alt="">
                    <div class="split-banner_text-block">
                        <h3>Moisturizing Strawberry Face Milk</h3>
                        <p>Shop Fourth ray beauty</p>
                    </div>
                </router-link>
            </article>
        </div>
        <div class="shopify-section">
            <article class="banner-a-wrap">
                <router-link to="">
                    <img src="../assets/img/sol/homepage_bg.jpg" alt="">
                </router-link>
            </article>
        </div>
        <div class="shopify-section">
            <article class="image-blocks">
                <router-link to="" class="image-blocks_container">
                    <img src="../assets/img/HP_PALETTES.jpg" alt="">
                    <div class="image-block_container-text">
                        <h3>shop palettes</h3>
                    </div>
                </router-link>
                <router-link to="" class="image-blocks_container">
                    <img src="../assets/img/sol/HP_BYOP.webp" alt="">
                    <div class="image-block_container-text">
                        <h3>build your own oalette</h3>
                    </div>
                </router-link>
                <router-link to="" class="image-blocks_container">
                    <img src="../assets/img/Fourth_Ray_hp_CP.webp" alt="">
                    <div class="image-block_container-text">
                        <h3>shop fourth ray beauty</h3>
                    </div>
                </router-link>
            </article>
        </div>
        <div class="shopify-section">
            <article class="image-blocks">
                <router-link to="" class="image-blocks_container">
                    <img src="../assets/img/SSS.jpg" alt="">
                    <div class="image-block_container-text">
                        <h3>shop palettes</h3>
                    </div>
                </router-link>
                <router-link to="" class="image-blocks_container">
                    <img src="../assets/img/sol/GLOSS.jpg" alt="">
                    <div class="image-block_container-text">
                        <h3>build your own oalette</h3>
                    </div>
                </router-link>
                <router-link to="" class="image-blocks_container">
                    <img src="../assets/img/DISNEY.jpg" alt="">
                    <div class="image-block_container-text">
                        <h3>shop fourth ray beayty</h3>
                    </div>
                </router-link>
            </article>
        </div>
        <div class="shopify-section">
            <article class="instragram">
                <div class="content">
                    <p style="text-align: center">GET FEATURED ON INSTAGRAM #COLOURPOPME</p>
                    <router-link to="">
                        <h2>get featured on instagram #COLOURPOPME</h2>
                    </router-link>
                </div>
            </article>
        </div>
        <div class="shopify-section">
            <article class="about">
                <div class="content">
                    <div class="abouthover">
                        <h3>ABOUT US</h3>
                        <div class="aboutinfo">
                            <h2>make with love in california</h2>
                            <h3>It's our mission to redefine luxury beauty by creating amazing products at prices that don't break the bank. Dedicated to newness at lightning speed, we imagine, develop, test, and manufacture all under one roof. We pride ourselves on being cruelty-free, wallet-friendly, and keeping our customers at the center of our world
                            </h3>
                            <router-link class="btn_banner" to=""="">WATCH NOW</router-link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <div class="shopify-section">
            <article class="icon_links">
                <div class="content">
                    <div class="icon_links_icons_container">
                        <router-link to="">
                            <svg class="iconorder-issues" aria-hidden="true">
                                <use xlink:href="#iconorder-issues-prp"></use>
                            </svg>
                        <p>order issues</p>
                        </router-link>	
                    <router-link to="">
                            <svg class="iconicon-payments" aria-hidden="true">
                                <use xlink:href="#iconicon-payments-prp"></use>
                            </svg>
                    <p>payments&promo</p>
                    </router-link>
                    <router-link to="">
                            <svg class="iconicon-deliveries" aria-hidden="true">
                                <use xlink:href="#iconicon-deliveries-prp"></use>
                            </svg>
                        <p>shipping</p>
                        </router-link>
                        <router-link to="">
                            <svg class="iconicon-deliveries" aria-hidden="true">
                                <use xlink:href="#iconicon-refunds-prp"></use>
                            </svg>
                            <p>return&refund</p>
                        </router-link>
                        <router-link to="">
                            <svg class="iconicon-products" aria-hidden="true">
                                <use xlink:href="#iconicon-products-prp"></use>
                            </svg>
                            <p>product&stock</p>
                        </router-link>
                        <router-link to="">
                            <svg class="iconicon-technical" aria-hidden="true">
                                <use xlink:href="#iconicon-technical-prp"></use>
                            </svg>
                            <p>technical</p>
                        </router-link>
                    </div>
                    <div class="icon_links_links_container">
                        <router-link to="">
                            <div class="link-title">
                                <svg class="iconicon-ship" aria-hidden="true">
                                    <use xlink:href="#iconicon-ship"></use>
                                </svg>
                                <h3>free shipping</h3>
                            </div>
                            <p class="link-text">
                                global order over $50
                                <br>
                                U.S. orders over $30
                            </p>
                        </router-link>
                        <router-link to="">
                            <div class="link-title">
                                <svg class="iconlink-referafriend" aria-hidden="true">
                                    <use xlink:href="#iconicon-referafriend"></use>
                                </svg>
                                <h3>want free stuff</h3>
                            </div>
                            <p style="text-decoration: underline" class="link-text">
                                refer a friend
                            </p>
                        </router-link>
                        <router-link to="">
                            <div class="link-title">
                                <h3>offers + promps</h3>
                            </div>
                            <p style="text-decoration: underline;" class="link-text">
                                see details
                            </p>
                        </router-link>
                    </div>
                </div>
            </article>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            colours:[
                {cimg:require('../assets/img/colours/COLOUR ME HAPPY.jpg'),
                cname:'She\'s a Rainbow',
                prod_type:'Palette',
                price:40,
                description:'Get endless looks with this new RAINBOW palette!'},
                {cimg:require('../assets/img/colours/COLOUR ME HAPPY.jpg'),
                cname:'She\'s a Rainbow',
                prod_type:'Palette',
                price:40,
                description:'Get endless looks with this new RAINBOW palette!'},
                {cimg:require('../assets/img/colours/COLOUR ME HAPPY.jpg'),
                cname:'She\'s a Rainbow',
                prod_type:'Palette',
                price:40,
                description:'Get endless looks with this new RAINBOW palette!'},
                {cimg:require('../assets/img/colours/COLOUR ME HAPPY.jpg'),
                cname:'She\'s a Rainbow',
                prod_type:'Palette',
                price:40,
                description:'Get endless looks with this new RAINBOW palette!'},
                {cimg:require('../assets/img/colours/COLOUR ME HAPPY.jpg'),
                cname:'She\'s a Rainbow',
                prod_type:'Palette',
                price:40,
                description:'Get endless looks with this new RAINBOW palette!'},
                {cimg:require('../assets/img/colours/COLOUR ME HAPPY.jpg'),
                cname:'She\'s a Rainbow',
                prod_type:'Palette',
                price:40,
                description:'Get endless looks with this new RAINBOW palette!'},
            ],
            drag:{
                left:20,
                start:0,
                end:0,
            }
        }
    },
    methods:{
        move(e){
            var width = document.body.clientWidth
            this.drag.left=parseInt(e.changedTouches[0].pageX)+this.drag.end-this.drag.start;
            if(this.drag.left >= 20){
                this.drag.left = 20;
                return
            }
            if(this.drag.left <= -1500 + width){
                 this.drag.left = -1500+width 
                 return
            } 
        },
        start(e){
           this.drag.start = parseInt(e.changedTouches[0].pageX)
        },
        end(){
          this.drag.end=this.drag.left;
        },
        toDetails(){
            this.$router.push("/details/1")
        }
    },
    // mounted() {
    //     var container = document.getElementById('bestseller-container')
    //     container.addEventListener('mousedown', (e) => {
    //         var target = e.target
    //         var ul = document.getElementById('items')
    //         var x = e.clientX
    //         console.log(x)
    //         // console.log()
    //     })
    // },
    
}
</script>
<style scoped>
.homepage .shopify-section {
    width: 100%;
}
.homepage .banner-a-wrap{
    width: 100%;
    margin-bottom: 15px;
}
.homepage .shopify-section .bestseller{
    width: 100%;
}
.bestseller .bestseller-title{
    text-align: center;
    width: 100%;
    font-size: 1.6em;
    text-align: center;
    margin: 3em 0 1.5em 0;
    padding: 0 20px;
    text-transform: lowercase;
    letter-spacing: 0.08em;
    box-sizing: border-box;
    position: relative;
}
h3.section_title_sidelined span:before {
    content: '';
    display: inline-block;
    width: calc(30% - 50px);
    height: 1px;
    background: #333;
    position: absolute;
    top: 60%;
    left: 20px;
    transform: translateY(-50%);
}
h3.section_title_sidelined span:after {
    content: '';
    display: inline-block;
    width: calc(30% - 50px);
    height: 1px;
    background: #333;
    position: absolute;
    top: 60%;
    right: 20px;
    transform: translateY(-50%);
}
.bestseller .bestseller-container{
    width: 100%;
    overflow: hidden;
}
.bestseller .bestseller-container ul{
    display: flex;
    width: 1500px;
    
}
.bestseller-container .bestseller-items li{
    width: 230px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
}
.bestseller-item .item-img, .item-img img{
    width: 100%;
}
.bestseller-item .item-detail{
    width: 100%;
    display: flex;
    flex-direction: column;
}
 .item-detail .item-name{
    display: flex;
    margin-top: 1em;
    justify-content: space-between;
 }
 .item-detail .item-name h6{
    width: 120px;
    font-size: 0.9em;
    font: 0.8em "VisbyCFExtraBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: bolder;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    max-width: 90%;
    white-space: pre-wrap;
 }
 .item-detail .item-name .wishlist-container{
     width: 20px;
 }
 /* 收藏夹 */
 .wishlist-container .wishllist_image{
     width: 100%;
     background-image: url('../assets/img/icon/xin.png');
     background-size: 20px 20px;
    width: 20px;
    height: 20px;
}
.wishlist-container .wishllist_image:hover{
    background-image: url('../assets/img/icon/xin_black.png')
}
/* 加入购物车按钮 */
.item-addtobag{
    width: 100%;
    border: 1px solid #333;
    text-transform: uppercase;
    text-align: center;
    font: 0.8em/1 "VisbyCFBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #333;
    background-color: #fff;
    cursor: pointer;
    padding:1.329em 0.78em;
    letter-spacing: 0.0625em;
}
.item-addtobag:hover{
    color: #fff;
    background-color: #333;
}
.homepage .shopify-section .split-banner{
    display: flex;
    justify-content: space-between;
}
.homepage .shopify-section .image-blocks{
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
}
.item-detail .carousel-prod-type{
    font-size: 12px;
    font: 0.75em/1.4 "VisbyCFMedium","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: uppercase
}
.item-detail .carousel-prod-price{
    font: 0.75em "VisbyCFMedium","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 1em 0 1em 0;
}
.item-detail .carousel-prod-description {
    font: 0.75em/1.4 "VisbyCFMedium","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0.4em 0 1em 0;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.split-banner .split-banner_item{
    width: 48%;
    text-align: center;
}
.image-blocks .image-blocks_container{
    width: 30%;
    text-align: center;
}
.split-banner .split-banner_item img,.banner-a-wrap img, .image-blocks .image-blocks_container img{
    width: 100%;
}
.split-banner_item .split-banner_text-block p{
    text-transform: uppercase;
    font-size: 0.8em;
    color: #333;
}
.split-banner_item .split-banner_text-block h3, .image-blocks .image-blocks_container h3{
    font: 1.4em "VisbyCFExtraBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    letter-spacing: 0.1em;
    font-weight: bolder;
    margin:15px 0;
}
.homepage .shopify-section .instragram{
	background-color: #FFF0F0;
	padding: 50px 0px 40px 0px;
	margin: 50px 0px 0px 0px;
	position: relative;
}
.homepage article.instragram p{
	margin-bottom: 10px;
	text-transform: uppercase;
    font: 0.75em/1.4 "VisbyCFDemiBold","Helvetica Neue",Helvetica,Arial,sans-serif;
}
.homepage article.instragram h2{
	font-size: 1.7em;
}
.homepage article.instragram h2{
	text-align: center;
	font: 1.5em "VisbyCFExtraBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: lowercase;
    letter-spacing: 0.1em;
	color: #111111;
	font-weight: bolder;
}
.homepage .shopify-section .about{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    background: #F3EDFF;
	padding: 4.4em 0;
    text-align: center;
	position: relative;
}
.homepage article.about .abouthover{
	width: 85%;
    margin: auto auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.homepage article.about .abouthover h3{
	font-size: 0.875em;
}
.homepage article.about .abouthover h3 {
    font: 0.75em/1.4 "VisbyCFDemiBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #333;
    width: calc(100% - 40px);
    
}
.homepage article.about .aboutinfo h2 {
    font: 1.5em "VisbyCFExtraBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 0;
    letter-spacing: 0.1em;
	font-weight: bolder;
	display: block;
    margin: 1em auto 0.8em auto;
}
.homepage article.about .aboutinfo h3{
	font: 0.75em/1.5 "VisbyCFMedium","Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #333;
    margin: 0 auto;
	position:relative;
}
.homepage .about .aboutinfo .btn_banner{
	display: block;
	font: 0.8em/1 "VisbyCFBold","Helvetica Neue",Helvetica,Arial,sans-serif;
	width: 180px;
    background: #fff;
    color: #333;
    border: solid 1px #333;
	padding: 1.329em 0.78em; 
	font-weight:600;
	cursor: pointer;
    margin: 0px auto;
    margin: 3em auto 0px auto;
    position:relative;
}
.homepage article.icon_links{
	background-color: #FAFAFA;
}
.homepage article.icon_links .icon_links_icons_container{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 40px 40px 20px;
}
.homepage article.icon_links .icon_links_icons_container a{
	text-align: center;
}
.homepage article.icon_links .icon_links_icons_container p{
	display: block;
	font: 0.75em "VisbyCFExtraBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 15px 0 10px 0;
    margin-bottom: 0;
    text-align: center;
    color: #333;
    text-transform: uppercase;
	font-weight: bolder;
}
.homepage article.icon_links .icon_links_links_container{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 20px 40px 30px;
	width: 100%;
}
.homepage article.icon_links .icon_links_links_container a{
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left:  20px;
	width: 30%;
}
.homepage article.icon_links .icon_links_links_container a:after{
	content: "|";
	font-size: 25px;
	color: #333;
	margin-left: 20px;
}
.homepage article.icon_links .icon_links_links_container a .link-title{
	display: flex;
	justify-content: center;
	align-items: center;
}
.homepage article.icon_links .icon_links_links_container a .link-title img{
	margin: 13px 0;
}
.homepage article.icon_links .icon_links_links_container a .link-title h3{
	text-transform: uppercase;
    font: 1em "VisbyCFExtraBold","Helvetica Neue",Helvetica,Arial,sans-serif;
	font-weight: bold;
	margin: 10px 0 10px 16px;
}
.homepage article.icon_links .icon_links_links_container a .link-text{
	font: 11px "VisbyCFDemiBold-Obl",Helvetica,Arial,sans-serif;
	padding-left: 15px;
	color: #333;
	text-transform: uppercase;
	font-style: oblique;
	font-weight: 550;
}

</style>