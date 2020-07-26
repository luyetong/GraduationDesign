<template>
    <div>
        <div class="header_search-container">
            <form class="header_search-bar">
                <input class="header_search-bar--input" type="text" placeholder="tell us what you want" maxlength="255" v-model="searchContent">
                <input class="header_search-bar-button" type="submit" value="Search" @click="search">
            </form>
        </div>
    </div>
</template>
<script>
import funs from '../../funs.js'
import { mapMutations } from 'vuex'
export default {
    name:'HeaderSearch',
    data() {
        return {
            searchContent:'',
            productList:[]
        }
    },
    methods:{
        search(){
            funs.getSearchProducts(this.searchContent,result=>{
                if(result.data.code===1){
                    this.productList = result.data.product
                    this.setSearchProducts(this.productList)
                }
            })
        },
        ...mapMutations(['setSearchProducts'])
    }
}
</script>
<style scoped>
.header_search-container{
    width: 100%;
    position: fixed;
    text-align: center;
    top: 75px;
    background: #f8f8f8;
    z-index: 20;
    padding: 20px 40px;
}
.header_search-container .header_search-bar{
    position: relative;
}
.header_search-container .header_search-bar--input{
    width: calc(100% - 97px);
    padding: 14px;
    border: 1px solid;
    background-color: #fff;
    color: #111;
    margin-right: -7px;
}
.header_search-container .header_search-bar-button{
    border: 1px solid;
    background: #fff;
    height: 46px;
    padding: 0 20px;
    text-transform: lowercase;
    z-index: 1;
    margin: 0 auto;
    position: relative;
    color: #111;
    cursor: pointer;

}
</style>