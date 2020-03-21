import axios from "axios"

export default {
    //1.商品列表
    getEyePalettes(callback) {
        axios.get("product/eyepalettes")
            .then((result) => {
                callback(result)
                //console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    //2.商品详情
    getDetails(pid, callback) {
        //console.log(pid)
        var url = `product/details`
        var obj = {
            pid
        }
        axios.get(url, {
            params: obj
        }).then((result) => {
            //console.log(result)
            callback(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    //3.注册
    getRegist(data, callback){

        axios.post("user/api/v1/regist", data)
            .then(result=>{
                callback(result)
            })
            .catch(err=>{
                console.log(err)
            })
    },
    //4.登录
    getLogin(data, callback) {
        axios.post("user/api/v1/login", data)
            .then(result => {
                callback(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    //5.个人中心
    getAccount(callback) {
        axios.get(`user/api/v1/account`)
        .then(result=>{
            callback(result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    //6.退出登录
    getLogout(callback) {
        console.log('logout')
        axios.get("user/api/v1/logout")
        .then(result=>{
            callback(result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    //7.加入购物车
    getAddCart(data,callback) {
        axios.post("/user/api/v1/toCart",data)
        .then(result=>{
            callback(result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    //8.查看购物车
    getShowcart(callback) {
        axios.get('/user/api/v1/showCart')
        .then(result=>{
            callback(result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    //9.删除购物车商品
    getDeleteCart(pid,callback){
        // console.log(8888,pid)
        var url = '/user/api/v1/deleteItem'
        var obj ={
            pid
        }
        axios.delete(url,{params:obj})
        .then(result=>{
            callback(result)
            // console.log(result)
            // console.log(8888,pid)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    //10.加入心愿单
    getAddWishlist(data,callback){
        axios.post('/user/api/v1/addWishlist',data)
        .then(result=>{
            callback(result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    //11.心愿单移除商品
    getRemoveWishlist(pid,callback){
        var url = '/user/api/v1/deleteWishlist'
        var obj ={
            pid
        }
        axios.delete(url,{params:obj})
        .then(result=>{
            callback(result)
            // console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    //12.加载心愿单信息
    getShowWishlist(callback){
        axios.get('/user/api/v1/showWishlist')
        .then(result=>{
            callback(result)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    //13.更新购物车商品数量
    getUpdatePcount(data,callback){
        axios.post('/user/api/v1/updateCart',data)
        .then(result=>{
            callback(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }

}