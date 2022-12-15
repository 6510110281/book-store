import Router from 'koa-router'
import db from '../db'
const router = new Router()

const makeQuery = () => db('category').select('*')
const findById = (id: number) => makeQuery().where({id})

router
  .get('/', async (ctx, next) => {            
    ctx.body = await makeQuery().orderBy('id')
  })

export default router