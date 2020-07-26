<template>
  <header id="header-top">
    <div class="main-header" :style="boxshadowStyle">
      <div class="header-hamburg">
        <el-button type='text' @click="showNavigation">
          <svg class="iconhamburg" aria-hidden="true" v-if="isOpen">
              <use xlink:href="#iconhamburg"></use>
          </svg>
          <svg class="iconhamburg" aria-hidden="true" v-else>
              <use xlink:href="#iconicon-close"></use>
          </svg>
        </el-button>
      </div>
      <!-- 侧边导航栏 -->
      <header-navigation :style="navigationStyle" @toTheme='toTheme' @toHome='toHome'></header-navigation>
      <div class="header-logo">
        <el-button type='text' @click="LogotoHome">
          <!--<svg class="icon-logo" aria-hidden="true">
            <use xlink:href="#iconlogo"></use>
          </svg>-->
          <img src="../assets/img/top_logo.jpg" alt="" class="hvr-grow-shadow">
        </el-button>
      </div>
      <div class="header-icon">
        <el-button type='text' @click="search" class="hvr-float">
          <svg class="icon-search" aria-hidden="true">
            <use xlink:href="#iconicon-search-m"></use>
          </svg>
        </el-button>
        <el-dropdown class="header-dropdown hvr-float">
          <span class="el-dropdown-link">
            <svg class="icon-account" aria-hidden="true">
              <use xlink:href="#iconicon-account"></use>
            </svg>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="toAccount('first')">
              <svg class="iconaccount" aria-hidden="true">
                <use xlink:href="#iconaccount"></use>
              </svg>
              <span class="dropdown-span">my account</span>
            </el-dropdown-item>
            <el-dropdown-item @click.native="toAccount('second')">
              <svg class="iconmakeup" aria-hidden="true">
                <use xlink:href="#iconmakeup"></use>
              </svg>
              <span class="dropdown-span">beauty profile</span>
            </el-dropdown-item>
            <el-dropdown-item @click.native="toAccount('third')">
              <svg class="iconOrderList" aria-hidden="true">
                <use xlink:href="#iconOrderList"></use>
              </svg>
              <span class="dropdown-span">order history</span>
            </el-dropdown-item>
            <el-dropdown-item @click.native="toAccount('fourth')">
              <svg class="iconaccount" aria-hidden="true">
                <use xlink:href="#iconxin"></use>
              </svg>
              <span class="dropdown-span">my wishlist</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type='text' @click="showbag" class="hvr-float">
          <svg class="icon-bag" aria-hidden="true">
            <use xlink:href="#iconicon-bag-m"></use>
          </svg>
        </el-button>
      </div>
    </div>
    <div class="globalbanner">
      <span>100% cruelty free</span>
      <span>luxury formulas</span>
      <span>wallte-friendly prices</span>
    </div>
    <!-- 搜索栏 -->
    <header-search :style="searchStyle"></header-search>
    <!-- 购物车 -->
    <header-sidecart :style="this.isOpenCart" :cartList="cartList"></header-sidecart>
  </header>
</template>
<script>
import HeaderNavigation from './headers/navigation'
import HeaderSearch from './headers/search'
import HeaderSidecart from './shoppingcart/sidecart'
import fun from '../funs.js'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      boxshadowStyle:{
        'box-shadow':'none'
      },
      navigationStyle:{ display:'none' },
      searchStyle:{display:'none'},
      isOpen:true,
      cartList:[]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollTop);
  },
  methods: {
    LogotoHome(){
      this.$router.push('/')
    },
    toAccount(item){
      // console.log(item)
      var path = this.$store.state.path
      var isLogin = localStorage.getItem("isLogin")
      // 保存用户想要访问的path
      console.log('item', item)
      this.$store.commit('setAccountItem', item)
      if(path !== '/account'){
        this.$router.push("/account")
      }
      if(isLogin===false){
        this.$router.push('/login')
      }
    },
    //顶部header样式变化
    scrollTop(){
      var scrollTop = document.documentElement.scrollTop
      if(scrollTop > 1){
        this.boxshadowStyle['box-shadow'] = '0px 3px 3px 0px rgba(0,0,0,0.1)'
      }else{
        this.boxshadowStyle['box-shadow'] = 'none'
      }
    },
    //打开侧边导航栏
    showNavigation(){
      if(this.navigationStyle.display=='none'){
        this.navigationStyle.display='block'
        this.isOpen = false
      }else{
        this.navigationStyle.display='none'
        this.isOpen = true
      }
    },
    //侧边导航栏的跳转
    toTheme(){
        this.navigationStyle.display='none'
        this.isOpen = true
    },
    toHome(){
      this.navigationStyle.display='none'
      this.isOpen = true
    },
    //打开搜索框
    search(){
      if(this.searchStyle.display=='none'){
        this.searchStyle.display='block'
      }else{
        this.searchStyle.display='none'
      }
    },
    showbag(){
      if(this.isOpenCart.display==='none'){
        this.$store.commit('setIsCartOpen','block')
        this.$store.commit('setCartInfo')
      }
    },
    ...mapMutations(['setIsCartOpen'])
  },
  computed: {
    ...mapState(['isOpenCart'])
  },
  components:{
    HeaderNavigation,
    HeaderSidecart,
    HeaderSearch
  },
  created() {
    this.$store.commit('setCartInfo')
  },
}
</script>
<style scoped>
#header-top{
  width: 100%;
  height: 100px;
  position: relative;
}
#header-top .main-header{
  width: 100%;;
  height: 75px;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  background-color: #ffffff;
  z-index: 20;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.1) */
}
#header-top .main-header .header-hamburg{
  z-index: 30;
}
#header-top .main-header .header-logo{
  position: absolute;
  left: 36%;
}
#header-top .main-header .header-logo img{
  width: 350px;
}
#header-top .globalbanner{
  width: 100%;
  position: relative;
  top: 75px;
  text-align: center;
}
#header-top .globalbanner span{
  padding: 0px 5px;
  font-size: 13px;
  color: #3c3935;
}
#header-top .globalbanner span:nth-child(2){
  border-left: 1px solid #111111;
  border-right: 1px solid #111111;
}
#header-top .header-dropdown .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{
  color: #c9b0d0;
  background-color: #f8f8f8;
}
#header-top .header-dropdown .el-dropdown-menu__item{
  display: flex;
  align-items: center;

}
#header-top .header-dropdown .el-dropdown-menu__item span{
  margin-left: 10px;
}
@media screen and (min-width:499px){
  .icon-bag{
    display: block;
  }
  .header-icon .el-dropdown{
    margin-right: 25px;
    margin-left: 25px;
  }
  #header-top .main-header{
    padding: 0px 50px;
  }
}
@media screen and (max-width:500px){
  .icon-bag{
    display: none;
  }
  .header-icon .el-dropdown{
    margin-right: 0px;
    margin-left: 25px;
  }
  #header-top .main-header{
    padding: 0px 20px;
  }
}
</style>