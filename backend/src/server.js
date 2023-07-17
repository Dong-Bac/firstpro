import express from 'express'
import configViewEnginee from'./config/viewEngine'
import initWebRoutes from './route/web'
import bodyParser from 'body-parser'
import configDB from './config/configDB'

require('dotenv').config()

const app = express()

const port = process.env.port||3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

configViewEnginee(app)
initWebRoutes(app)
configDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})