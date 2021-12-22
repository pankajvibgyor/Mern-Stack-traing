import React, {useState,useContext, useEffect} from "react"
import "./login.css"
import axios from "axios"
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { ValueContext } from "../../contextComponent/Valuecontext";
const Login = () => {

    const{user,setAuth,setUser,handelChange}=useContext(ValueContext) //context api formation using useContext
    // const {email,password} = user
    const [open, setOpen] = useState(false)
    // handle toggle 
    const toggle = () =>{
        setOpen(!open)
    }
  


    const navigate = useNavigate();

     const login=()=>{
        axios.post("http://localhost:4000/login",user)
        .then(res=>{
            alert(res.data.message)
            setUser(res.data.user||{})  
            localStorage.setItem('id',JSON.stringify(res.data.user._id));
            // setAuth(true)
            // localStorage.setItem('password', password);          
            navigate('/homepage')
            
        })
       
    }
    useEffect(()=>{
        if(
   localStorage.getItem('id') ){setAuth(true)} else setAuth(false)
        })
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name='email'  value={user.email} placeholder="Enter your Email" onChange={handelChange}></input>
            <input type={(open === false)? 'password' :'text'}  name="password" value={user.password} placeholder="Enter your Password" onChange={handelChange} ></input>
            <div className='paseye1'>{(open === false)? <AiFillEye onClick={toggle}/>:<AiFillEyeInvisible onClick={toggle}/>}</div>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate('/register')}>Register</div>
        </div>
    )
}

export default Login