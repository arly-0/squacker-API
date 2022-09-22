import Router from 'express'
import userController from '../controllers/user-controller.js'
import { body } from 'express-validator'
import authMiddleware from '../middlewares/auth-middleware.js'

const authRouter = new Router()

authRouter.post('/register',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.register
)
authRouter.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.login)
authRouter.post('/logout', userController.logout)
authRouter.get('/activate/:link', userController.activate)
authRouter.get('/refresh', userController.refresh)
authRouter.get('/users', authMiddleware, userController.getUsers)

export default authRouter