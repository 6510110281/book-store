import Koa from 'koa'
import APIrouter from './api'

const app = new Koa()

app.use(APIrouter.routes())

app.listen(8000)