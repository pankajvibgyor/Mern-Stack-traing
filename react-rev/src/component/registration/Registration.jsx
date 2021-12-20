import React,{useContext, useState} from 'react'
import './registration.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import TextBox from 'react-native-password-eye';

import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { ValueContext } from '../../contextComponent/Valuecontext';

import { useNavigate } from 'react-router-dom';
function Registration() {

    // useContextAPI
    const{user,setUser,handelChange}=useContext(ValueContext)
    const {firstName , lastName , Gender , email, password, reEnterPassword } = user

    const navigate = useNavigate(); //navigation 

    const [open, setOpen] = useState(false) //for password show or hide
    // handle toggle 
    const toggle = () =>{
        setOpen(!open)
    }


 

    const register=()=>{
       
     if( firstName && lastName && Gender&& email && password && (password === reEnterPassword)){
        axios.post("http://localhost:4000/register",user)
        .then(res=>alert(res.data.message))
        navigate('/login')
        
        }
     else {
        toast.error("invlid input",{position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
         })
    }}
    return (
        <div className="register">
       
        <h1>Register</h1>
        <input type="text" name="firstName" value={firstName} placeholder="first name" onChange={handelChange} ></input>
        <input type="text" name="lastName" value={lastName} placeholder="last name" onChange={handelChange} ></input>
        <input type="text" name="Gender" value={Gender}  placeholder="gender" onChange={handelChange}></input>
        <input type="text" name="email" value={email} placeholder="your email" onChange={handelChange}></input>
        <input type={(open === false)? 'password' :'text'} name="password" value={password} placeholder="your password" onChange={handelChange}></input>
          <div className='paseye' style={{marginLeft:"18rem"}}> {(open === false)? <AiFillEye onClick={toggle}/>:<AiFillEyeInvisible onClick={toggle}/>}</div>
        <input type="password" name="reEnterPassword" value={reEnterPassword} placeholder="Re-enter Password" onChange={handelChange}></input>
        <div className="button"onClick={register} >Register</div>
        <div>or</div>
        <div className="button" onClick={()=>navigate('/')} >Login</div>
        <ToastContainer />
    </div>
    )
}

export default Registration
