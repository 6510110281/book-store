import Router from 'koa-router'
import category from './category'

const APIrouter = new Router()

APIrouter.get('/api/greet', async (ctx, next) => {
  ctx.body = {msg: 'Hello world.'}
})

APIrouter.use('/api/category', category.routes())
  
export default APIrouter