// 引入koa
const Koa = require('koa')
const Fly = require('flyio/src/node/index.js');
const jwt = require('jsonwebtoken');
const fly = new Fly();
// 引入koa-touter
const koaRouter = require('koa-router')
// 得到实例对象
const app = new Koa()
// 穿件路由实例
const router = new koaRouter()
// 使用中间件
app.use(router.routes()).use(router.allowedMethods())
const indexDatas = require('./datas/index.json')
// 创建路由,请求首页数据
router.get('/getIndexDatas', (ctx, next) => {
  console.log('/test success')
  ctx.body = indexDatas
})


const indexCateList = require('./datas/indexCateList.json')
//请求购物车数据
router.get('/getIndexCateList', async (ctx, next) => {
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(indexCateList)
    }, 2000)
  })
  ctx.body = result
})

const goodList = require('./datas/goods.json')
router.get('/getGoodDetail', (ctx, next) => {
  console.log(ctx.query)
  const { goodId } = ctx.query
  // console.log(goodList)
  const goodInfo = goodList.find(item => {
    return item.id === goodId * 1
  })
  // console.log(goodInfo, 11111111111111)
  ctx.body = goodInfo
})

// 用户返回用户自定义登录状态token(由OpenId)
router.get('/getOpenId', async (ctx, next) => {
  const { code } = ctx.query
  let appId = 'wx53653055fa944692'
  let appsecret = '5cd2dba42e8f20433e1b7baaca12d684'
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appsecret}&js_code=${code}&grant_type=authorization_code`;
  // console.log(code)
  const result = await fly.get(url)
  // console.log(result, 422111111111331)
  const { session_key, openid } = JSON.parse(result.data)

  // ctx.body = openId
  let salt = 'zhoujianhong'
  // 生成密文
  let token = jwt.sign({
    data: openid
  }, salt)
  console.log(token)
  // 解码密文
  const msg = jwt.verify(token, salt)
  console.log(msg, openid)
})
// 将其挂载到端口上
app.listen(1234, (err, msg) => {
  if (err) return
  console.log('服务器启动成功,http://localhost:1234')
})

/*
  1 下载对应的包 npm i koa koa-router
  2 得到服务器实例对象
  3 得到路由实例对象
  4 使用中间件
      1 router.routes()
      2 router.allowedMethods()
  5 创建路由,调用路由实例对象的方法
      回调函数的只要两个参数,第一个是ctx,相当于express的req,res
      ctx.body就代表返回响应的数据
  6 将服务器挂载在端口上


*/