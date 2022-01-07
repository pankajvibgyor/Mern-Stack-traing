const adminSchema =require('../../models/admin/admin')
const jwt =require('jsonwebtoken')
// new user signup 

exports.signUp= async(req,res)=>{
    try{
 const emailFind=  await adminSchema.findOne({email:req.body.email})
 if(emailFind){
     res.status(400).json({message:"Email is already in database please type new email"})
 }
 else{ 
    const{
        firstName,
        lastName,
        email,
        password
    }=req.body   
     const newAdmin=new adminSchema({
        firstName,
        lastName,
        email,
        password,
        userName: firstName + Math.random().toString(36).substr(2, 3),
        role:"admin"
    })
    newAdmin.save((error)=>{
        if(error){
            console.log(error)
            return res.status(400).json({message:"something went wrong"})
        }
        else{
            return res.status(200).json({message:"admin succesfully register"})
        }

    })}}
    catch(error){
        return res.status(500).json(error)
    }}



// new admin login

exports.signIn=async(req,res)=>{

    try{
    const {email,password}=req.body
    if(!email && !password){
        res.status(400).json({message:"please fill the data first"})
    }
    else{
        const admin =await adminSchema.findOne({email}).select("+password");
        if(!admin){
            return res.status(401).json({message:"invalid user crendential "})
        }
        const isMatch=await admin.matchPasswords(password)

        if(isMatch && admin.role=="admin"){
      //token generation            
            const token =jwt.sign({_id:admin._id},process.env.JWT_SECREAT_KEY,{expiresIn:'1h'})
            const {_id,firstName,lastName,email,role,fullName}=admin

            res.status(200).json({message:" 😅 😅 wowww ho gaya login ⚽ 😸 🐌 💀 😄",
                admin:{
                _id,firstName,lastName,email,role,fullName},token})  
        }else{
       
        return res.status(401).json({message:"email or password is wrong "})
     } }
}
catch(error){
    console.log(error)
    res.status(500).json(error)
}


}

// authentication 


exports.requireSignin=(req,res ,next)=>{
    var token = req.headers.authorization.split(' ')[1];
    const admin =jwt.verify(token ,process.env.JWT_SECREAT_KEY)
    req.admin=admin
    console.log(admin)
    next();

}