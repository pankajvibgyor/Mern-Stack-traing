const express=require('express')
const router=express.Router()
const bodyParser=require('body-Parser')
const jsonParser = bodyParser.json()
const otpSend = require('../SendOtp')
router.post('/emailsend',jsonParser, otpSend.emailsend)

module.exports=router