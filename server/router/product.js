const express = require('express')
// 引入连接池
const pool = require('../pool.js')
var router = express.Router()

// 添加路由
// 1.商品列表
router.get('/eyepalettes', (req, res) => {
 // 获取数据
  var obj = req.query
  //查询数据库
  var sql = `select * from cp_product where family_id=1`
  pool.query(sql,(err,result)=>{
    if (err) throw err
    if (result.length > 0 ){
      res.send({ code: 1, eyepalettes: result })
    }else{
      res.send({ code: -1, msg: `没有该商品`})
    }
  })
})

// 2.商品详情
router.get('/details', (req, res) => {
  // 获取数据
  var pid = req.query.pid
  // 查询数据库
  // var sql =  `select * from cp_product as pro left join cp_palette_pic as pic on pro.pid = pic.pid where pro.pid=?`
  var sql =`select * from cp_product where pid=?`
  pool.query(sql, [pid], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.send({ code: 1, product: result })
    } else {
      res.send({ code: -1, msg: `没有该商品` })
    }
  })
})

// 3.口红商品列表
router.get('/lips', (req, res) => {
  // 获取数据
   var obj = req.query
   //查询数据库
   var sql = `select * from cp_product where family_id=2`
   pool.query(sql,(err,result)=>{
     if (err) throw err
     if (result.length > 0 ){
       res.send({ code: 1, lips: result })
     }else{
       res.send({ code: -1, msg: `没有该商品`})
     }
   })
 })
 // 4.口红商品列表
router.get('/liquid', (req, res) => {
  // 获取数据
   var obj = req.query
   //查询数据库
   var sql = `select * from cp_product where family_id=3`
   pool.query(sql,(err,result)=>{
     if (err) throw err
     if (result.length > 0 ){
       res.send({ code: 1, lips: result })
     }else{
       res.send({ code: -1, msg: `没有该商品`})
     }
   })
 })
 // 5.主页商品列表
router.get('/mainProducts', (req, res) => {
  // 获取数据
   var obj = req.query
   //查询数据库
   var sql = `select * from cp_product where family_id=2 and main_id=1`
   pool.query(sql,(err,result)=>{
     if (err) throw err
     if (result.length > 0 ){
       res.send({ code: 1, mainLips: result })
     }else{
       res.send({ code: -1, msg: `没有该商品`})
     }
   })
 })
 //6.查询商品
 router.get('/searchProducts',(req,res) => {
   //获取数据
  var searchContent = req.query.searchContent
  var searchSql = `select * from cp_product where name like '%${searchContent}%' or category like '%${searchContent}%'`
  pool.query(searchSql, [searchContent], (err, result) => {
    if (err) throw err
    if(result.length>0){
      res.send({ code: 1, product: result })
    } else {
      res.send({ code: -1, msg: `没有该商品` })
    }
  })
 })
module.exports = router