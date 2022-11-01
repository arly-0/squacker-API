import Router from 'express'
import SessionController from "../controllers/session-controller.js"
import authMiddleware from "../middlewares/auth-middleware.js";

const sessionRouter = new Router()

sessionRouter.post('/', authMiddleware, SessionController.create)
sessionRouter.patch('/:session_id', authMiddleware, SessionController.update)
sessionRouter.delete('/:session_id', authMiddleware, SessionController.delete)

export default sessionRouter