require('dotenv').config()
const express = require('express')
 const app = express()
const cors = require('cors')
const Router = require('./routes')

app.use(cors())

app.use(express.json())

app.use('/chat', Router)

app.listen(process.env.PORT, ()=> {
    console.log('http://localhost:5000')
})
