import Router from 'express'
import SessionController from "../controllers/session-controller.js"
import authMiddleware from "../middlewares/auth-middleware.js";
import {body} from "express-validator";

const sessionRouter = new Router()

sessionRouter.post('/', body('note').isLength({ max: 150 }), authMiddleware, SessionController.create)
sessionRouter.patch('/:session_id', body('note').isLength({ max: 150 }), authMiddleware, SessionController.update)
sessionRouter.delete('/:session_id', authMiddleware, SessionController.delete)

export default sessionRouter