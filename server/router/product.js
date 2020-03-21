const express = require('express')
// 引入连接池
const pool = require('../pool.js')
var router = express.Router()

// 添加路由
// 1.商品列表
router.get('/eyepalettes', (req, res) => {
 // 获取数据
  var obj = req.query
  console.log(obj)
  //查询数据库
  var sql = `select * from cp_product`
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

module.exports = router