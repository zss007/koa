const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return

  await next()

  console.log('sss')
})

app.use((ctx, next) => {
  ctx.body = 'hello world'
})

// app.use(function* (next) {
//   this.body = 'Hello World';
//   yield next
// })

app.listen(3000)