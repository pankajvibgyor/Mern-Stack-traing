const express =require('express');
const { addCategory, getCategory } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../middelware');
const router =express.Router();

router.post('/category/create',requireSignin,adminMiddleware,  addCategory)
router.get('/category/getcategory',getCategory)


module.exports=router