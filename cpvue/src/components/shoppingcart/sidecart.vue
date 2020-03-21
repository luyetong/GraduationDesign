<template>
    <div id="shopify-section-theme_sidecart" class="shopify-section-theme_sidecart">
        <section class="nospacing" data-section-type="SideCart">
            <div class="side-cart_parent">
                <div class="side-cart_header">
                    <label class="side-cart_header--title">Shopping Bag</label>
                    <button class="side-cart_header--close" @click="closeBag">
                        <svg class="iconicon-close-big" aria-hidden="true">
                        <use xlink:href="#iconicon-close"></use>
                        </svg>
                    </button>
                </div>
                <div class="side-cart_container">
                    <div class="side-cart_product" v-for='(p,i) of cartList' :key='i'>
                        <div class="side-cart_product-image">
                            <img :src="'http://localhost:4000/' + p.nor" alt="">
                        </div>
                        <div class="side-cart_product-details">
                            <label class="side-cart_product-details--title">{{p.name}}</label>
                            <label class="side-cart_product-details--type">{{p.category}}</label>
                            <label class="side-cart_product-details--price">${{p.price}}</label>
                            <quantity class="bag-quantity"  :i="i"></quantity>
                            <button class="side-cart_product-details--remove" @click='remove(i)'>
                                <svg class="iconicon-close-small" aria-hidden="true">
                                    <use xlink:href="#iconicon-close"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="side-cart_info">
                    <div class="side-cart_info--subtotal">
                        <label>Subtotal
                            <span>$109</span>
                        </label>
                    </div>
                    <div class="side-cart_info--checkout">
                        <a href="javascript:;" class="btn btn--secondary">
                            SECURE CHECKOUT
                        </a>
                    </div>
                    <div class="side-cart_info--additional">
                        <button>
                            <img :src='require("../../assets/img/pay.png")' alt="">
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import quantity from '../common/quantity'
import fun from '../../funs.js'
import { mapState } from 'vuex'
export default {
    name:'SideCart',
    data(){
        return{
            getNum:2
        }
    },
    methods:{
        closeBag(){
            if(this.isOpenCart.display ==='block'){
                this.$store.commit('setIsCartOpen','none')
            }
        },
        remove(i){
            var pid = this.cartList[i].pid
            this.cartList.splice(i,1)
            fun.getDeleteCart(pid,result=>{
                // console.log(this.pid)
            })
        },
        // handleChange (value) {
        //     // // this.getCount()
        //     // this.getNum = value
        //     console.log(88888,this.getNum)
        // },
        getCount(){
            var cartList
            cartList = this.cartList
            for(var c in cartList){
                console.log(99999,cartList[c].pcount)
                this.getNum= cartList[c].pcount
            }
        }
    },
    components:{
        quantity
    },
    computed: {
        ...mapState(['cartList','isOpenCart'])
    },
    created() {
        this.$store.commit('setCartInfo')
        
    },
}
</script>
<style>
[data-section-type="SideCart"] {
	width: 420px;
    position: fixed;
    top: 0;
    color: #111;
    background: #f3edff;
    height: 100%;
    overflow-y: auto;
    padding: 25px 40px 0 40px;
    z-index: 999;
    right: 1px;
}
.side-cart_parent{
    position: relative;
    height: 100%;
}
.side-cart_header{
    text-align: left;
    position: relative;
    margin-bottom: 20px;
}
.side-cart_header .side-cart_header--title {
    font: 1.3em/1 "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: lowercase;
    margin-bottom: 20px;
}
.side-cart_header .side-cart_header--close {
    position: absolute;
    right: 0px;
    top: 3px;
    background: transparent;
    width: 15px;
    height: 15px;
    padding: 0;
    border: 0;
}
.side-cart_container {
    max-height: calc(100% - 240px);
    overflow-y: auto;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product {
    padding: 15px;
    position: relative;
    background: #fff;
    margin-bottom: 10px;
    display:flex;
}
.side-cart_container .side-cart_product-image {
    width: 75px;
    display: inline-block;
    vertical-align: top;
}
.side-cart_container .side-cart_product-image img{
    width: 100%;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details {
    display: inline-block;
    width: calc(100% - 95px);
    vertical-align: top;
    margin: 0 0 0 20px;
}
.side-cart_product-details .bag-quantity .el-input-number--mini{
    width: 100px;
    margin-top: 20px;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details .side-cart_product-details--title{
    display: block;
    font: 12px "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0 0 4px 0;
    text-transform: uppercase;
    font-weight: bold;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details .side-cart_product-details--type {
    display: block;
    font: 11px "Visby CF Demi Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0 0 8px 0;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details .side-cart_product-details--price {
    display: block;
    font: 11px "Visby CF Demi Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
}
[data-section-type="SideCart"] .side-cart_container .side-cart_product-details--remove {
    background: transparent;
    border: 0;
    position: absolute;
    top: 43%;
    transform: translateY(-50%);
    right: 20px;
    width: 10px;
    padding: 0px;
}
/*尾部*/
[data-section-type="SideCart"] .side-cart_info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 0 20px 0;
}
[data-section-type="SideCart"] .side-cart_info .side-cart_info--subtotal {
    margin: 0 0 10px;
    font-family: "Visby CF Extra Bold";
    font-weight: 700;
    line-height: 1.2;
    overflow-wrap: break-word;
    word-wrap: break-word;
    padding: 20px 0;
    font: 1.3em/1 "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: lowercase;
}
[data-section-type="SideCart"] .side-cart_info .side-cart_info--subtotal span {
    float: right;
}
.btn.btn--secondary{
    background-color: #000;
    border-color: #000;
    color: #fff;
}
[data-section-type="SideCart"] .side-cart_info .side-cart_info--checkout a {
    width: 100%;
}
.btn {
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: auto;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 13px 5px;
    font-family: "Visby CF Bold";
    font-weight: 700;
    text-transform: lowercase;
    letter-spacing: 0.06em;
    white-space: normal;
    font-size: 12px;
    transition: 0.2s cubic-bezier(0.44, 0.13, 0.48, 0.87);
}
[data-section-type="SideCart"] .side-cart_info .side-cart_info--additional {
    margin: 10px 0 0 0;
}
.side-cart_info .side-cart_info--additional button{
    width: 100%;
    height: 42px;
    border: 0px;
    border-radius: 5px;
    background-color: #f6b600;
    cursor: pointer;
}
.side-cart_info .side-cart_info--additional img{
    width: 63px;
}

</style>