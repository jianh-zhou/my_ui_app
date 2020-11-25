// 引入koa
const Koa = require('koa')
// 引入koa-touter
const koaRouter = require('koa-router')
// 得到实例对象
const app = new Koa()
// 穿件路由实例
const router = new koaRouter()
// 使用中间件
app.use(router.routes()).use(router.allowedMethods())
const indexDatas = require('./datas/index.json')
// 创建路由
router.get('/getIndexDatas', (ctx, next) => {
  console.log('/test success')
  ctx.body = indexDatas
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