import dotenv from 'dotenv'
import express, { json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connect } from 'mongoose'
import rootRouter from './router/index.js'
import errorMiddleware from './middlewares/error-middleware.js'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

dotenv.config()
const PORT = process.env.PORT
const app = express()
const swaggerDocument = YAML.load('./docs.yaml')

app.use(json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        if (process.env.CLIENT_URL.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
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
