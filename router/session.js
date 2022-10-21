import Router from 'express'
import SessionController from "../controllers/session-controller.js"
import authMiddleware from "../middlewares/auth-middleware.js";

const sessionRouter = new Router()

sessionRouter.post('/create', SessionController.create)

export default sessionRouter