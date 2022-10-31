import Router from 'express'
import authRouter from './auth.js'
import sessionRouter from "./session.js"

const rootRouter = Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/session', sessionRouter)

export default rootRouter