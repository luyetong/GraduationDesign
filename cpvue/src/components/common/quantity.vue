<template>
  <div id="quantity">
    <el-input-number size="mini" :min="1" v-model="cartList[i].pcount"
    @change="handleChange"
    ></el-input-number>
  </div>
</template>
<script>
import funs from '../../funs'
import { mapState } from 'vuex';
  export default {
    data() {
      return {
        num: 1
      };
    },
    props:[
      "i"
    ],
    methods: {
      handleChange(value) {
        
        //更新购物车商品数量
        var cid = this.cartList[this.i].cid
        var pid = this.cartList[this.i].pid
        var pcount = this.cartList[this.i].pcount
        const data = {cid,pid,pcount}
        funs.getUpdatePcount(data,result=>{
        })

      },
    },
    computed: {
      ...mapState(['cartList'])
    },
    created() {
    },
  };
</script>
<style>
#quantity .el-input-number__increase,#quantity .el-input-number__decrease{
  background-color: transparent;
  border: none;
  color: #111111;
}
#quantity .el-input__inner{
  border: 1px solid #111111;
  border-radius: 0;
  color: #111111;
}
</style>