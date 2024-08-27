import express, { json } from 'express'
import router from './src/modules/product/product.routes.js'
const app = express()
const port = 3000
import cors from 'cors'
app.use(json())
app.use(cors())
app.use(router)

app.listen(port, () => console.log(`server is running on port ${port}...`))
