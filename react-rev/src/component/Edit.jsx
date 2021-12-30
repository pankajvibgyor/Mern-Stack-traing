import React,{useContext,useState,useEffect} from 'react'
// import './edit.css'
import axios from 'axios'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import {ValueContext} from '../contextComponent/Valuecontext'
function Edit() {
    const {id}=useParams()
    const navigate = useNavigate();
    const {user,setUser,handelChange}=useContext(ValueContext)
   
    const {firstName , lastName , Gender , email, password, reEnterPassword } = user
  
   
    useEffect(() => {   
        
        getlist()
    
      }, []);
     
      function getlist(){
          fetch(`http://localhost:4000/get/${id}`).then((response) => {response.json().then((resp)=>
          {
            setUser({
                 firstName:resp.firstName,
                 lastName:resp.lastName,
                 Gender:resp.Gender,
                 email:resp.email,
                 password:resp.password,
                 reEnterPassword:resp.reEnterPassword
             })
      })
      })}

    const register=()=>{  
        let data={firstName,lastName,Gender,email,password,reEnterPassword}
                      
    if( firstName && lastName && Gender&& email && password && (password === reEnterPassword)){
        fetch(`http://localhost:4000/patch/${id}`,{ method :'PATCH', headers:{'Accept':'application/json', 'Content-Type':'application/json'},
        body:JSON.stringify(data)
         } ).then((result)=>{
            setUser(result)
            console.log(result)
        
    })
 
   
    alert("Data Update SuccessFully...")
    navigate('/alluser')
        
        }
     else {
        alert("invlid input")
    }}
    return (
        <div className="register">
       
        <h1>Register</h1>
        <input type="text" autoComplete="off" name="firstName" value={firstName} placeholder="first name" onChange={handelChange} ></input>
        <input type="text" autoComplete="off" name="lastName" value={lastName} placeholder="last name" onChange={handelChange} ></input>
        <input type="text" autoComplete="off" name="Gender" value={Gender}  placeholder="gender" onChange={handelChange}></input>
        <input type="text" autoComplete="off" name="email" value={email} placeholder="your email" onChange={handelChange}></input>
        <input type="password"autoComplete="off" name="password" value={password} placeholder="your password" onChange={handelChange}></input>
        <input type="password" autoComplete="off" name="reEnterPassword" value={reEnterPassword} placeholder="Re-enter Password" onChange={handelChange}></input>
        <div className="button"onClick={()=>register}>EditForm</div>
        
    </div>
    )
}

export default Edit
