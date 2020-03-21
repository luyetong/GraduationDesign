const express = require('express')
//引入连接池
const pool = require('../pool')
// 引入jwt
const {
  generateToken
} = require('../jwt')
//创建路由
var router = express.Router()
//添加路由
//1.注册路由
router.post('/api/v1/regist', (req, res) => {
  //获取数据
  var obj = req.body
  var {
    ufirst_name,
    ulast_name,
    email,
    upwd
  } = obj
  //验证是否为空 
  if (!ufirst_name) {
    return res.send({
      code: 1001,
      msg: `名字不能为空`
    })
  }
  if (!ulast_name) {
    return res.send({
      code: 1002,
      msg: `姓氏不能为空`
    })
  }
  if (!email) {
    return res.send({
      code: 1003,
      msg: `电子邮箱不能为空`
    })
  }
  if (!upwd) {
    return res.send({
      code: 1004,
      msg: `密码不能为空`
    })
  }
  //判断电子邮箱格式
  var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!emailReg.test(email)) {
    return res.send({
      code: 1005,
      msg: `电子邮箱填写格式错误`
    })
  }
  //判断名字格式
  var ufirst_nameReg = /^[a-z]{1,15}$/i
  if (!ufirst_nameReg.test(ufirst_name)) {
    return res.send({
      code: 1006,
      msg: `名字填写格式错误`
    })
  }
  //判断姓氏格式
  var ulast_nameReg = /^[a-z]{1,15}$/i
  if (!ulast_nameReg.test(ulast_name)) {
    return res.send({
      code: 1007,
      msg: `姓氏填写格式错误`
    })
  }
  //判断密码格式
  var upwdReg = /^(\w){6,20}$/
  if (!upwdReg.test(upwd)) {
    return res.send({
      code: 1008,
      msg: `密码格式填写错误`
    })
  }
  //查询该电子邮箱是否已注册
  var sql = `select email from cp_user where email=?`
  pool.query(sql, [email], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      //电子邮箱已存在
      res.send({
        code: 1009,
        msg: `电子邮箱已存在`
      })
    } else {
      //电子邮箱可注册
      var sql = `insert into cp_user (ufirst_name,ulast_name,email,upwd) values (?,?,?,?)`
      pool.query(sql, [ufirst_name, ulast_name, email, upwd], (err, result) => {
        if (err) throw err
        if (result.affectedRows > 0) {
          res.send({
            code: 200,
            msg: `注册成功`
          })
        } else {
          res.send({
            code: 1010,
            msg: `注册失败`
          })
        }
      })
    }
  })
})
//2.登录路由
router.post('/api/v1/login', (req, res) => {
  //获取数据
  var {
    email,
    upwd
  } = req.body
  //验证是否为空
  if (!email) {
    return res.send({
      code: 1001,
      msg: `电子邮箱不能为空`
    })
  }
  if (!upwd) {
    return res.send({
      code: 1002,
      msg: `密码不能为空`
    })
  }
  //sql语句
  var sql = `select uid from cp_user where email=? and upwd=?`
  //查询数据库，检测登录信息是否合法
  pool.query(sql, [email, upwd], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      //该用户合法 登录成功
      //生成token
      result = result[0]
      var data = {
        uid: result.uid
      }
      var token = generateToken(data) //生成token
      res.send({
        code: 200,
        msg: `登录成功`,
        token: token
      })
    } else {
      res.send({
        code: 1003,
        msg: `登录失败`
      })
    }
  })
})
//3.个人中心
router.get('/api/v1/account', (req, res) => {
  //获取数据
  var uid = req.user.uid
  //sql语句
  var sql = `select * from cp_user where uid=?`
  pool.query(sql, [uid], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.send({
        code: 200,
        msg: `获取用户信息成功`,
        personalinfo: result
      })
    } else {
      res.send({
        code: 1001,
        msg: `获取用户信息失败`
      })
    }
  })
})

//4.退出登录
router.get('/api/v1/logout', (req, res) => {
  res.send({
    code: 200,
    msg: `注销成功`
  })
})

//5.加入购物车
router.post('/api/v1/toCart', (req, res) => {
  //获取数据
  var uid = req.user.uid
  var obj = req.body
  var {
    cid,
    category,
    pid,
    name,
    pcount,
    price,
    sale_price,
    tprice
  } = obj
  price = parseFloat(price)
  pcount = parseInt(pcount)
  if (!sale_price) {
    sale_price = null
  } else {
    sale_price = parseFloat(sale_price)
  }
  if (!pcount) {
    pcount = parseInt(1)
  }
  //查看用户购物车是否为空
  var sql = `select cid,tprice from cp_usercart where uid=?`
  pool.query(sql, [uid], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      //用户购物车不为空，查看商品是否已加入过购物车
      cid = result[0].cid
      console.log(111111, cid)
      var sql = `select name,category,pcount,price,sale_price from cp_pcart where cid=? and pid=?`
      pool.query(sql, [cid, pid], (err, result) => {
        if (err) throw err
        if (result.length > 0) {
          //商品已加入过购物车
          var num = result[0].pcount
          num += parseInt(pcount)
          console.log(222222, cid)
          var sql = `update cp_pcart set pcount=${num} where cid=${cid} and pid=${pid}`
          pool.query(sql, [cid, pid], (err, result) => {
            if (err) throw err
            if (result.affectedRows > 0) {

              res.send({
                code: 200,
                msg: `添加成功`
              })
            } else {
              res.send({
                code: 1001,
                msg: `添加失败！`
              })
            }
          })
        } else {
          console.log(333333, cid)
          //商品没被添加过购物车
          var sql = `insert into cp_pcart (cid,pid,name,category,pcount,price,sale_price) values (?,?,?,?,?,?,?)`
          pool.query(sql, [cid,
              pid, name, category, pcount, price, sale_price
            ],
            (err, result) => {
              if (err) throw err
              if (result.affectedRows > 0) {
                res.send({
                  code: 200,
                  msg: `加入成功!`
                })
              } else {
                res.send({
                  code: 1002,
                  msg: `加入失败！`
                })
              }
            })
        }
      })
    } else {
      //用户购物车为空
      console.log(4444444, cid)
      var sql = `insert into cp_usercart (cid,uid,tprice) values (?,?,?)`
      pool.query(sql, [cid, uid, tprice], (err, result) => {
        if (err) throw err
        if (result.affectedRows > 0) {
          //创建购物车成功，查询新的cid
          var sql = `select cid,tprice from cp_usercart where uid=?`
          pool.query(sql, [uid], (err, result) => {
            if (err) throw err
            if (result.length > 0) {
              cid = result[0].cid
              console.log(555555, cid)
              //向购物车新加入商品
              var sql = `insert into cp_pcart (cid,pid,name,category,pcount,price,sale_price) values (?,?,?,?,?,?,?)`
              pool.query(sql, [cid,
                  pid, name, category, pcount, price, sale_price
                ],
                (err, result) => {
                  if (err) throw err
                  if (result.affectedRows > 0) {
                    res.send({
                      code: 200,
                      msg: `新加入加入成功!`
                    })
                  } else {
                    res.send({
                      code: 1002,
                      msg: `新加入加入失败！`
                    })
                  }
                })
            } else {
              res.send({
                code: 1004,
                msg: `查询用户新的cid失败`
              })
            }
          })
        } else {
          res.send({
            code: 1003,
            msg: `用户添加购物车数据失败！`
          })
        }
      })
    }
  })


})

//6.查看购物车
router.get('/api/v1/showCart', (req, res) => {
  //获取数据
  var uid = req.user.uid
  var sql = `select cp_usercart.*,cp_pcart.*,cp_palette_pic.nor from cp_usercart,cp_pcart,cp_palette_pic where uid=? AND cp_usercart.cid = cp_pcart.cid AND cp_pcart.pid = cp_palette_pic.pid`
  pool.query(sql, [uid], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.send({
        code: 200,
        msg: `购物车查看成功！`,
        cartList: result
      })
    } else {
      res.send({
        code: 1001,
        msg: `购物车为空！`
      })
    }
  })
})

//7.删除购物车商品
router.delete('/api/v1/deleteItem', (req, res) => {
  var pid = req.query.pid
  var uid = req.user.uid
  //查看用户购物车是否为空
  var sql = `select cid,tprice from cp_usercart where uid=?`
  pool.query(sql, [uid], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      //删除商品
      cid = result[0].cid
      var sql = `delete from cp_pcart where pid=? AND cid=?`
      pool.query(sql, [pid, cid], (err, result) => {
        if (err) throw err
        if (result.affectedRows > 0) {
          //查看购物车是否已清空
          var sql = `select cp_pcart.* from cp_pcart INNER JOIN cp_usercart ON cp_usercart.cid = cp_pcart.cid WHERE uid=?`
          pool.query(sql, [uid], (err, result) => {
            if (err) throw err
            if (result.length > 0) {
              res.send({
                code: 200,
                msg: `还有商品`
              })
            } else {
              var sql = `delete from cp_usercart where uid=?`
              pool.query(sql, [uid], (err, result) => {
                if (err) throw err
                if (result.affectedRows > 0) {
                  res.send({
                    code: 200,
                    msg: `商品已清空`
                  })
                } else {
                  res.send({
                    code: 1003,
                    msg: `清空失败`
                  })
                }
              })
            }
          })

        } else {
          res.send({
            code: 1001,
            msg: `删除失败或没有该商品可删除！`
          })
        }
      })
    } else {
      res.send({
        code: 1002,
        msg: `购物车为空!`
      })
    }
  })
})

//8.加入心愿单
router.post('/api/v1/addWishlist', (req, res) => {
  //获取数据
  var uid = req.user.uid
  var pid = req.body.pid
  //添加商品
  var addToWishlist = `insert into cp_wishlist (uid,pid) values (?,?)`
  //查看新的心愿单信息
  var ShowNewLish = `select cp_wishlist.pid,cp_product.* from cp_wishlist,cp_product WHERE uid=? AND cp_wishlist.pid = cp_product.pid`
  pool.query(addToWishlist, [uid, pid], (err, result) => {
    if (err) throw err
    if (result.affectedRows > 0) {
      // res.send({code:200 , msg:`商品加入心愿单`})
      pool.query(ShowNewLish, [uid], (err, result) => {
        if (err) throw err
        if (result.length > 0) {
          res.send({
            code: 200,
            msg: `成功查看新增心愿单`,
            wishList: result
          })
        } else {
          res.send({
            code: 1002,
            msg: `查看新增心愿单失败`
          })
        }
      })
    } else {
      res.send({
        code: 1001,
        msg: `商品加入心愿单失败`
      })
    }
  })
})

//9.从心愿单中移除
router.delete('/api/v1/deleteWishlist', (req, res) => {
  //获取数据
  var pid = req.query.pid
  var uid = req.user.uid
  //删除心愿单中的商品
  var deleteWishlist = `delete from cp_wishlist where uid=? AND pid=?`
  //查看新的心愿单信息
  var ShowNewLish = `select cp_wishlist.pid,cp_product.* from cp_wishlist,cp_product WHERE uid=? AND cp_wishlist.pid = cp_product.pid`
  pool.query(deleteWishlist, [uid, pid], (err, result) => {
    if (err) throw err;
    console.log(result)
    if (result.affectedRows > 0) {
      pool.query(ShowNewLish, [uid], (err, result) => {
        if (err) throw err
        if (result.length > 0) {
          res.send({
            code: 200,
            msg: `心愿单移除商品成功`,
            wishList: result
          })
        } else {
          res.send({
            code: 1002,
            msg: `查看新增心愿单失败`
          })
        }
      })
    } else {
      res.send({
        code: 1001,
        msg: `心愿单移除商品失败`
      })
    }
  })
})

//10.查看心愿单商品
router.get('/api/v1/showWishlist', (req, res) => {
  //获取数据
  var uid = req.user.uid
  //查看心愿单商品
  var showWishlist = `select cp_wishlist.pid,cp_product.* from cp_wishlist,cp_product WHERE uid=? AND cp_wishlist.pid = cp_product.pid`
  pool.query(showWishlist, [uid], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.send({
        code: 200,
        msg: `查看心愿单成功`,
        wishList: result
      })
    } else {
      res.send({
        code: 1001,
        msg: `查看心愿单失败`
      })
    }
  })
})

//11.购物车商品数量操作更新
router.post('/api/v1/updateCart', (req, res) => {
  //获取数据
  var uid = req.user.uid
  var obj = req.body
  var {
    cid,
    pcount,
    pid
  } = obj
  //更新用户商品在购物车的数量
  var updatePcount = `update cp_pcart set pcount=${pcount} where cid=? and pid=?`

  pool.query(updatePcount, [cid, pid], (err, result) => {
    if (err) throw err
    if (result.affectedRows > 0) {
      //查看修改后的商品数量
      var showPcount = `select * from cp_pcart where cid=? and pid=?`
      pool.query(showPcount, [cid, pid], (err, result) => {
        if (err) throw err
        if (result.length > 0) {
          res.send({
            code: 200,
            msg: `成功查看修改后的商品数量`
          })
        }
        else{
          res.send({
            code:1002,
            msg:`查看修改后的商品数量失败`
          })
        }
      })
    } else {
      res.send({
        code: 1001,
        msg: `商品数量修改失败`
      })
    }
  })
})

module.exports = router