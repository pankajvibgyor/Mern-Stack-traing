const jwt =require('jsonwebtoken')

exports.requireSignin=(req,res,next)=>{
    if(req.headers.authorization){
    var token = req.headers.authorization.split(' ')[1];
    const admin =jwt.verify(token ,process.env.JWT_SECREAT_KEY)
    req.admin=admin
    console.log(admin)
}
    else{
        return res.status(400).json({message:"Authorziation required"})
    }
    next();  
}

exports.userMiddleware=(req,res,next)=>{
    if(req.user.role!=='user'){
        return res.status(400).json({message:"access denied"})
    }
    next()
    
}
exports.adminMiddleware=(req,res,next)=>{
 if(req.admin.role!=='admin'){
     return res.status(400).json({message:"access denied"})
 }
 next()
}