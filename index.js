import dotenv from 'dotenv'
import express, { json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connect } from 'mongoose'
import rootRouter from './router/index.js'
import errorMiddleware from './middlewares/error-middleware.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json' assert {type: 'json'}

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', rootRouter)
app.use(errorMiddleware)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

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