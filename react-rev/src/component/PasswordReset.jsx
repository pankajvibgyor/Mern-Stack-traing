import React,{useState,useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ValueContext } from "../contextComponent/Valuecontext";
import "./password.css"
function PasswordReset() {
    const navigate=useNavigate();
    const{user,setUser,handelChange}=useContext(ValueContext)
    const {email}=user
    const getOTP = async (e)=> {
        e.preventDefault();
        const data=axios.post("http://localhost:4000/emailsend",user)
        .then(res=>{
            alert(res.data.statusText)
            setUser(res.data.user ||{})
            if(!data){ 
            navigate("/passwordreset")
            }    
           navigate('/changepassword')
    })
 



    //     const {email}=user
    //     const data={email}
        
    //     fetch("http://localhost:4000/emailsend",{ method :'POST', headers:{'Accept':'application/json', 'Content-Type':'application/json'},
    //                 body:JSON.stringify(data)} 
    //                 ).then((result)=>{
        
        
    //     if(getOTP){
    //         toast.success("OTP Send sucessfully...",
    //         {
    //             position:"top-center"
    //         });
    //         // navigate('/changepassword')
    //     }    
    //     else{
    //         toast.error("User Not Found",
    //         {
    //             position:"top-center"
    //         });
    //     }
        
      
    // })
    
}
     
   
    return (
        <div className="login">
            <h2>ForgetPassword</h2>
            <form >
                <label htmlFor="email">Email</label>
                <input type="text" autoComplete="on" name='email'  value={user.email} placeholder="Enter your Email" onChange={handelChange} ></input>
                <div className="btn btn-danger" onClick={getOTP}>Send Mail</div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default PasswordReset
