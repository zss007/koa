const Koa = require('koa')
const Session = require('koa-session')
const app = new Koa()

app.use(Session({
  key: 'koa:sess',
  signed: false,
}, app))

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return

  await next()

  console.log('sss')
})

app.use((ctx, next) => {
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = n + ' views';
})

// app.use(function* (next) {
//   this.body = 'Hello World';
//   yield next
// })

app.listen(3000)