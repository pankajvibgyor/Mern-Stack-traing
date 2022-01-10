const express=require("express");

const router = express.Router();
const { signUp,signIn}=require('../../controller/admin/auth');
const { validateSignUpRequest,validateSignInRequest,isRquestValidated } = require("../../Validator/auth");

router.route("/admin/signup").post(validateSignUpRequest,isRquestValidated,signUp);
router.route("/admin/signin").post(validateSignInRequest,isRquestValidated,signIn);



// router.route("/profile").post(requireSignin,(req,res)=>{
//     res.status(200).json({admin:"pankaj profile"})
// });



module.exports=router