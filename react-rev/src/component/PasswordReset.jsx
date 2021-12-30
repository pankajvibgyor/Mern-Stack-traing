import React,{useState,useContext} from 'react'
import { ValueContext } from "../contextComponent/Valuecontext";
import "./login.css"
function PasswordReset() {
    const{user,handelChange}=useContext(ValueContext)
    const{email}=user
    const [data ,setData]=useState([])
    const handelClick=async()=>{
        await fetch("http://localhost:4000/email-send").then((response) =>{
            response.json().then((resp)=>{ 
                         
                setData(resp)
            })
            window.alert(`otp send `)
           
        })}
   
    return (
        <div className="login">
            <h2>ForgetPassword</h2>
            <form >
                <label htmlFor="email">Email</label>
                <input type="text" autoComplete="on" name='email'  value={email} placeholder="Enter your Email" onChange={handelChange} ></input>
                <div className="btn btn-danger" onClick={handelClick}>Send Mail</div>
            </form>

        </div>
    )
}

export default PasswordReset
