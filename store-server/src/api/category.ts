import Router from 'koa-router'
const router = new Router()

router
    .get('/', async (ctx, next) =>{
        ctx.body = [
            {id: 1, title: 'Social'},
            {id: 2, title: 'Money'}
        ]
    })

    export default router
