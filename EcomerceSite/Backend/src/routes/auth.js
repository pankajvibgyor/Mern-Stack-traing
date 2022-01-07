const express=require("express")
const router = express.Router();
const { signUp,signIn, requireSignin}=require('../controller/auth')

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);



router.route("/profile").post(requireSignin,(req,res)=>{
    res.status(200).json({user:"pankaj profile"})
});



module.exports=router