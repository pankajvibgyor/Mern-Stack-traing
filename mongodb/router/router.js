const express=require('express')
const router=express.Router()
const bodyParser=require('body-Parser')
const jsonParser = bodyParser.json()
const otpSend = require('../SendOtp')
router.post('/email-send',jsonParser, otpSend.email_send)
router.post('/change-password',jsonParser,otpSend.change_password)

module.exports=router