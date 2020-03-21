<template>
  <main id="account-page">
    <div class="act-banner">
      <img :src='require("../assets/img/background/Account_TOPBANNER_1024x1024_bd3f6326-b15d-44ad-aac0-da1e31012ed0_1024x1024.webp")' alt="">
    </div>
    <div class="act-welcome">
      <div class="act-welcome_container">
        <p class="act-welcome_hi">Hi, {{this.personalinfo.ulast_name}}</p>
        <span class="act-welcome_logout">
        Not {{this.personalinfo.ulast_name}}?
            <span @click="logout">logout here</span>
        </span>
      </div>
    </div>
    <el-tabs :value="activeName">
      <el-tab-pane label="Account" name="first">
        <article class="tab-account">
          <div class="account-info">
            <div class="info-title">
              <h2>persoanl info</h2>
            </div>
            <div class="info-content">
              <p>{{this.personalinfo.ufirst_name}}</p>
              <span>{{this.personalinfo.email}}</span>
            </div>
          </div>
          <div class="account-address">
            <div class="address-title">
              <h2>addresses</h2>
              <router-link to="">edit</router-link>
            </div>
            <div class="address-content">
              <p>{{this.personalinfo.ufirst_name}}</p>
              <span>{{this.personalinfo.email}}</span>
            </div>
          </div>
        </article>
      </el-tab-pane>
      <el-tab-pane label="Beauty Profile" name="second">
        <article class="tab-beauty_profile">
          <div class="beauty_profile-title">
            <h2>beauty profile</h2>
            <router-link to="">edit</router-link>
          </div>
        </article>
      </el-tab-pane>
      <el-tab-pane label="Order History" name="third">
        <article class="tab-order_history">
          <div class="order_history-container">
            <div class="order_history-title">
              <h2>order history</h2>
            </div>
          </div>
        </article>
      </el-tab-pane>
      <el-tab-pane label="Wishlist" name="fourth">
        <article class="tab-wishlist">
          <div class="wishlist-container">
            <div class="wishlist-title">
              <h2>wishlist</h2>
            </div>
            <div class="wishlist-header">
              <span>product</span>
              <router-link to="">share wishlist</router-link>
            </div>
            <wishlishItem></wishlishItem>
          </div>
        </article>
      </el-tab-pane>
    </el-tabs>
  </main>
</template>
<script>
import funs from "../funs.js"
import { mapState, mapMutations } from 'vuex'
import wishlishItem from '../components/wishlist/wishlishItem'
export default {
  data() {
    return {
      wishListItems:[]
    }
  },
  components:{
    wishlishItem
  },
  computed: {
    ...mapState(['personalinfo','activeName'])
  },
  created() {
    this.$store.commit('setPersonalInfo')
  },
  methods: {
    logout(e){
      e.preventDefault()
      funs.getLogout(result=>{
        if(result.data.code === 200){
          localStorage.removeItem('token')
          this.$store.commit('setIsLogin', false)
          this.$router.push('/login')
        }
      })
    },
  }
}
</script>
<style>
#account-page{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#account-page .act-banner{
  width: 100%;
}
#account-page .act-banner img{
  width: 100%;
}
#account-page .act-welcome{
  width: 100%;
  height: 150px;
  text-align: center;
  padding: 50px 0;
}
.act-welcome .act-welcome_container .act-welcome_hi {
    display: block;
    font: 1.5em "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    text-transform: lowercase;
    letter-spacing: 0.08em;
    font-weight: bold;
}
.act-welcome .act-welcome_container .act-welcome_logout {
    display: block;
    font: 12px "Visby CF Demi Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 1em 0 0 0;
}
.act-welcome .act-welcome_container .act-welcome_logout span{
    color: #999;
}
.act-welcome .act-welcome_container .act-welcome_logout span:hover{
    color: #111;
}
#account-page .el-tabs .el-tabs__item{
  color: #999;
  text-transform: uppercase;
  font: bolder 13px "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
  padding: 0;
}
#account-page .el-tabs .el-tabs__item:hover{
  color: #111;
}
#account-page .el-tabs .el-tabs__item.is-active{
  color: #111;
  border-bottom: 3px solid #111;
}
#account-page .el-tabs{
  width: 90%;
}
#account-page .el-tabs__nav{
  float: none;
  display: flex;
  justify-content: space-around;
}
#account-page .el-tabs__active-bar{
  display: none;
}
.el-tabs .tab-account, .el-tabs .tab-wishlist, .el-tabs .tab-order_history,.el-tabs .tab-beauty_profile{
  display: flex;
  margin: 60px auto;
  width: 100%;
}
.el-tabs .tab-account .account-info,.el-tabs .tab-account .account-address{
  width: 50%;
}
.el-tabs .tab-account .account-info{
  padding-right: 40px;
}
.account-info .info-title, .account-address .address-title{
  border-bottom: 1px solid #e8e8e8;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
}
.account-info .info-title h2, .account-address .address-title h2, .wishlist-container .wishlist-title h2, .order_history-container .order_history-title h2, .beauty_profile-title h2{
  font: 1.4em/1 "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #111;
  color: #d9ccf1;
  margin-bottom: 10px;
}
.account-address .address-title a, .tab-beauty_profile .beauty_profile-title a{
  color: #999999;
  text-decoration-line: underline;
  text-transform: uppercase;
  font: 12px/1.4 "Visby CF Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
}
.account-info .info-content p{
    text-transform: uppercase;
    font: bolder 13px "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin-bottom: 0.6em;
    letter-spacing: 0.06em;
}
.account-info .info-content span{
  font:12px "Visby CF Demi Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
  letter-spacing: 0.06em;
}
.tab-wishlist .wishlist-container, .order_history-container{
  width: 100%;
}
.wishlist-container .wishlist-title, .order_history-title{
  width: 100%;
  text-align: center;
}
.wishlist-container .wishlist-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 0;
}
.wishlist-container .wishlist-header span{
  text-transform: uppercase;
  font: bolder 13px/1 "Visby CF Extra Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
}
.wishlist-container .wishlist-header a{
  border: 1px solid #111;
  padding: 10px 20px;
  font: 12px/1 "Visby CF Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
  text-transform: uppercase;
}
.wishlist-container .wishlist-header a:hover{
  background-color: #333;
  color: #fff;
}
.beauty_profile-title{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  width: 100%;
}
</style>