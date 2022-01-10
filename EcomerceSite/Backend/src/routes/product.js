const express =require('express');
const {createProduct} = require('../controller/product');
const { requireSignin, adminMiddleware } = require('../middelware/index');
const multer=require('multer');
const upload=multer({dest:'upload/'})
const router =express.Router();

router.post('/product/create',requireSignin,adminMiddleware,upload.single('productPicture'),createProduct)
// router.get('/product/getproduct',getProduct)


module.exports=router