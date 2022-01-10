const express=require("express")
const router = express.Router();
const { signUp,signIn}=require('../controller/auth');
const { validateSignUpRequest,validateSignInRequest, isRquestValidated } = require("../Validator/auth");

router.post("/signup",validateSignUpRequest,isRquestValidated,signUp)
router.route("/signin").post(validateSignInRequest,isRquestValidated,signIn);



// router.route("/profile").post(requireSignin,(req,res)=>{
//     res.status(200).json({user:"pankaj profile"})
// });



module.exports=router