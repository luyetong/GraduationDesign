//引入模块依赖
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')

//生成token函数
function generateToken(data) {
  //获取secret密钥
  var privateKey = fs.readFileSync(path.join(__dirname, './pem'))
  //生成token
  var token = jwt.sign({
    data
  }, privateKey , {
    expiresIn: '30 days'
  })
  return token
}

//验证token函数
function verifyToken(token) {
  //获取secret密钥
  var privateKey = fs.readFileSync(path.join(__dirname, './pem'))
  //验证
  //创建res保存结果
  var res

  try {
    //验证成功返回token
    res = jwt.verify(token, privateKey)
  } catch (err) {
    //验证失败返回错误信息
    res = err
  }
  return res
}

module.exports = {generateToken,verifyToken}