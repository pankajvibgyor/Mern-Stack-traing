const express=require("express")
const router = express.Router();
const { signUp,signIn, requireSignin}=require('../../controller/admin/auth')

router.route("/admin/signup").post(signUp);
router.route("/admin/signin").post(signIn);



router.route("/profile").post(requireSignin,(req,res)=>{
    res.status(200).json({admin:"pankaj profile"})
});



module.exports=router