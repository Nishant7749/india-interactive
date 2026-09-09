const aiResponse = require('./controller')
const express = require('express')
 const router = express.Router()


 router.post('/', aiResponse)

 module.exports = router