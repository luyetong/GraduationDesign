// 引入express body-parser cors
const express = require('express')  //创建express应用
const bodyParser = require('body-parser')
const cors = require('cors')
// 引入路由
const productRouter = require('./router/product')
const userRouter = require('./router/user')
// 引入jwt
const { verifyToken } = require('./jwt')

var app = express()
// 挂载静态资源
app.use(express.static('./public'))
// 使用body—paser中间件,将post请求数据转换为对象
app.use(bodyParser.urlencoded({
  extended: false
}))
//接收json格式的数据
app.use(bodyParser.json())
//跨域
app.use(cors({
  origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
  // 每次请求需要验证
  credentials: true
}))

//添加自定义token验证中间件
app.use((req, res, next) => {
  //创建需验证的接口
  var url = req.url
  //用户接口除了登录注册都需要验证
  if (url !== '/user/api/v1/regist' &&
    url !== '/user/api/v1/login' &&
    url !== '/user/api/v1/logout' &&
    url.startsWith('/user')
  ) {
    //获取用户传来的token
    var token = req.headers.token
    if (!token) {  
      res.send({
        code: 403,
        msg: `未提供证书`
      })
    }else{
      var result = verifyToken(token)
      //判断result结果
      if(result.name==='TokenExpiredError'){
        res.send({code:403,msg:`登录超时，请重新登录`})
      }else if(result.name === 'JsonWebTokenError'){
        res.send({code:403,msg:`证书出错`})
      }else{
        //验证成功
        req.user = result.data
        next()
      }
    }
  }else{
    //其他不需要验证的接口
    next()
  }
})

// 添加路由
app.use('/product', productRouter)
app.use('/user', userRouter)


app.listen(4000, () => {
  console.log(`server start`)
})