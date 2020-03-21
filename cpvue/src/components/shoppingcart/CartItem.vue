<template>
  <div>
    <div class="side-cart_product" v-for='(p,i) of cartList' :key='i'>
    <div class="side-cart_product-image">
        <img :src="'http://localhost:4000/' + p.nor" alt="">
    </div>
    <div class="side-cart_product-details">
        <label class="side-cart_product-details--title">{{p.name}}</label>
        <label class="side-cart_product-details--type">{{p.category}}</label>
        <label class="side-cart_product-details--price">${{p.price}}</label>
        <quantity class="bag-quantity" :i="i"></quantity>
        <button class="side-cart_product-details--remove" @click='remove'>
            <svg class="iconicon-close-small" aria-hidden="true">
                <use xlink:href="#iconicon-close"></use>
            </svg>
        </button>
    </div>
  </div>
  </div>
</template>
<script>
import quantity from '../common/quantity'
import fun from '../../funs'
export default {
  name:'CartItem',
  data() {
    return {
      quantities:0
    }
  },
  props:{
    cartList
  },
  components:{
    quantity
  },
  methods: {
    remove(i){
            this.props.cartList.splice(i,1)
    },
    getItem(){
      this.$emit('getItem')
    },
    changeNum(){
      console.log(999)
    }
  },
  created() {
    // this.getItem()
  },
}
</script>