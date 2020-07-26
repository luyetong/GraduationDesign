<template>
  	<div class="pafe-wrap">
      <div id="content">
        <div id="customer-wrapper">
          <div id="template">
            <div class="clear"></div>
            <div id="customer">
              <div class="template_header">
                <h2>LOGIN</h2>
              </div>
              <el-tag type="danger" v-show="errorMsg">Incorrect email or password</el-tag>
              <form action="" id="customer_login">
                <div id="login_email" class="clear_fix">
                  <label for="customer_email" class="login">
                    Email Address
                  </label>
                  <input type="text" id="customer_email" class="large" size="30" v-model="email" @focus="clearInput">
                </div>
                <div id="login_password">
                  <label for="customer_password" class="login">
                    Password
                  </label>
                  <input type="password" id="customer_password" class="large" size="16" v-model="upwd">
                  <div id="forget_password">
                    <a href="">Forgot password?</a>
                  </div>
                </div>
                <div class="action_button">
                  <input type="submit" class="btn-secondary" value="SIGN IN" @click.prevent="login">
                </div>
              </form>
            </div>
          </div>
          <div id="create-customer">
            <div class="template_header">
              <h2>REGISTER/VERIFY</h2>
            </div>
            <form action="" id="create_customer">
              <div id="first_name_large" class="reg-text">
                <label for="first_name" class="login">First Name</label>
                <input type="text" id="first_name" class="large" size="30" v-model="first_name" @focus="clearFname">
                 <el-alert title="名字不能为空" type="error" v-show="first_name_null">
                </el-alert>
                <el-alert title="名字格式填写错误" type="error" v-show="first_name_err">
                </el-alert>
              </div>
              <div id="last_name_large" class="reg-text">
                <label for="last_name" class="login">Last Name</label>
                <input type="text" id="last_name" class="large" size="30" v-model="last_name" @focus="clearLname">
                <el-alert title="姓氏不能为空" type="error" v-show="last_name_null"></el-alert>
                <el-alert title="姓氏格式填写错误" type="error" v-show="last_name_err">
                </el-alert>
              </div>
              <div id="email_large" class="reg-text">
                <label for="email" class="login">Email Address</label>
                <input type="text" id="email" class="large" size="30" v-model="email_reg" @focus="clearEmail">
                <el-alert title="电子邮箱不能为空" type="error" v-show="email_null"></el-alert>
                <el-alert title="电子邮箱格式填写错误" type="error" v-show="email_err"></el-alert>
                <el-alert title="电子邮箱已存在" type="error" v-show="email_existed"></el-alert>
              </div>
              <div id="password_large" class="reg-text">
                <label for="password" class="login">Password</label>
                <input type="password" id="password" class="large_password" size="30" v-model="upwd_reg" @focus="clearPwd">
                <el-alert title="密码不能为空" type="error" v-show="pwd_null"></el-alert>
                <el-alert title="密码格式填写错误" type="error" v-show="pwd_err">
                </el-alert>
              </div>
              <div class="action_button">
                  <input type="submit" class="btn-secondary" value="REGISTER" @click="regist">
              </div>
            </form>
          </div>
        </div>
    </div>
	</div>
</template>
<script>
import funs from "../funs.js"
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      errorMsg:false,
      first_name:'',
      last_name:'',
      email_reg:'',
      upwd_reg:'',
      email: '',
      upwd: '',
      // 输入框填写为空
      first_name_null:false,
      last_name_null:false,
      email_null:false,
      pwd_null:false,
      // 输入框填写错误
      first_name_err:false,
      last_name_err:false,
      email_err:false,
      pwd_err:false,
      //电子邮箱已存在
      email_existed:false
    }
  },
  methods:{
    clearInput(){
            if(this.errorMsg==true){
              this.email = ''
              this.upwd = ''
              this.errorMsg = false
            }
    },
    clearFname(){
      if(this.first_name_null==true||this.first_name_err==true){
        this.first_name_null = false
        this.first_name_err = false
        this.first_name = ''
      }
    },
    clearLname(){
      if(this.last_name_null==true || this.last_name_err==true){
        this.last_name_null = false
        this.last_name_err = false
        this.last_name = ''
      }
    },
    clearEmail(){
      if(this.email_err==true || this.email_null==true || this.email_existed == true){
        this.email_null = false,
        this.email_existed = false
        this.email_err = false
        this.email_reg = ''
      }
    },
    clearPwd(){
      if(this.pwd_null==true || this.pwd_err==true){
        this.pwd_null = false,
        this.pwd_err = false
        this.upwd_reg = ''
      }
    },
    regist(){
      var data = {
        ufirst_name: this.first_name,
        ulast_name: this.last_name,
        email: this.email_reg,
        upwd: this.upwd_reg
      }
      funs.getRegist(data, result=>{
        if(result.data.code==1001){
          this.first_name_null=true
        }
        if(result.data.code==1002){
          this.last_name_null=true
        }
        if(result.data.code==1003){
          this.email_null=true
        }
        if(result.data.code==1004){
          this.pwd_null=true
        }
        if(result.data.code==1005){
          this.email_err=true
        }
        if(result.data.code==1006){
          this.first_name_err=true
        }
        if(result.data.code==1007){
          this.last_name_err=true
        }
        if(result.data.code==1008){
          this.pwd_err=true
        }
        if(result.data.code==1009){
          this.email_existed=true
        }
        if(result.data.code===200){
          funs.getLogin(data, result=>{
            console.log(result)
            if(result.data.code===200){
              localStorage.setItem("isLogin",this.isLogin)
              this.$router.push('/account')
            }else{
              this.errorMsg = true
              clearInput()
            }
          })
        }
      })
      
      
    },
    login(){
      var data = {
        email: this.email,
        upwd: this.upwd
      }
      funs.getLogin(data, result=>{
        console.log(result)
        if(result.data.code===200){
          this.setIsLogin(true)
          localStorage.setItem("isLogin",this.isLogin)
          this.$router.push('/account')
        }else{
          this.errorMsg = true
          clearInput()
        }
      })
    },
    ...mapMutations(['setIsLogin'])
  },
  computed: {
    ...mapState(['isLogin'])
  }
}
</script>
<style>
.pafe-wrap{
  width: 100%;
  margin-top: 50px;
}
#content{
	position: relative;
	margin-bottom: 25px;
	margin-left: auto;
	margin-right: auto;
}
@media screen and (min-width:1220px){
	#content{
		width: 1200px;
	}
	#customer-wrapper #template{
	width: 50%;
	padding: 2em 120px 2em 0;
	}
	#customer-wrapper #create-customer{
	width: 50%;
	padding: 2em 0 2em 120px;
    border-left: 1px solid #ddd;
	}
}
@media screen and (max-width:1220px){
	#content{
		width: 960px;
	}
	#customer-wrapper #template{
	width: 50%;
	padding: 2em 120px 2em 0;
	}
	#customer-wrapper #create-customer{
	width: 50%;
 	padding: 2em 0 2em 120px;
    border-left: 1px solid #ddd;
	}
}
@media screen and (max-width:980px){
	#content{
		width: 720px;
	}
	#customer-wrapper{
		flex-direction: column;
	}
	#customer-wrapper #template{
	width: 100%;
	padding: 2em 0 2em 0;
	}
	#customer-wrapper #create-customer{
	width: 100%;
	padding: 2em 0 2em 0px;
    border-left: 1px solid transparent;
	}
	
}
@media screen and (max-width:740px){
	#content{
		width: 480px;
	}
}
@media screen and (max-width:500px){
	#content{
		width: 300px;
	}
}
#customer-wrapper{
  display: flex;
	margin: 0 auto 80px auto;
}
#customer-wrapper #template{
	position: relative;
}
#template #customer{
	margin-top: 30px;
	
}
#customer .el-tag{
  width: 100%;
}
#customer-wrapper #create-customer{
    border-top: none;
	position: relative;
}

#template #customer{
	margin-top:20px; 
	width: 100%;
	position: relative;
}
#customer-wrapper .template_header{
	width: 100%;
}
#customer-wrapper .template_header h2{
	font-size: 1.4em;
}
#customer-wrapper .template_header h2{
	font: 1.4em "VisbyCFBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
	color: #111111;
	font-weight: bold;
}
#customer-wrapper #customer label,#create-customer label{
	font: 0.75em "VisbyCFDemiBold","Helvetica Neue",Helvetica,Arial,sans-serif;
}
#customer-wrapper #customer input[type="text"],input[type="password"],#create-customer input[type="text"]{
	font: 0.8em "VisbyCFDemiBold","Helvetica Neue",Helvetica,Arial,sans-serif;
    border: 1px solid #111111;
    background: white;
    letter-spacing: 0.0625em;
    padding: 1em 0.8em;
    display: block;
    width: 100%;
    margin: 0.4em 0 1em 0;
    border-radius: 0;
    outline-color: #c9b0d0;
	  box-sizing: border-box;
}
#customer #login_password #forget_password{
    text-align: center;
}
#customer #login_password #forget_password a{
	font: 0.75em "VisbyCFDemiBold","Helvetica Neue",Helvetica,Arial,sans-serif;
	color: #999;
}
#customer #login_password #forget_password a:hover{
	color: #333;
}
#create_customer .reg-text{
  margin-top: 10px;
}
#customer-wrapper .action_button{
    text-align: center;
    margin: 2em auto;
}
#customer-wrapper .action_button input[type="submit"]{
    width: 240px;
	height: 47px;
	background: transparent;
	border: 1px solid #333;
	color: #333;
	text-align: center;
	cursor: pointer;
	font-weight: bold;
    
}
#customer-wrapper .action_button input[type="submit"]:hover{
	background: #333;
	color: #fff;
}
.clearfix:after, .clearfix:before {
    display: table;
    content: "";
    line-height: 0;
}
.clear{
	clear: both;
    display: block;
    overflow: hidden;
    visibility: hidden;
    width: 0;
    height: 0;
}
</style>