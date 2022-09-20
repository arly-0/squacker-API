import dotenv from 'dotenv'
import express, { json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connect } from 'mongoose'
import router from './router/user-routes.js'
import errorMiddleware from './middlewares/error-middleware.js'

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()