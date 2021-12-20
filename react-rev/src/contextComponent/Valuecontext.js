 import React ,{useState,createContext} from "react";
export const ValueContext=createContext()

function ValueContextProvider({children}){


const[user ,setUser]=useState({
    firstName:'',
    lastName:'',
    Gender:'',
    email:'',
    password:'',
    reEnterPassword:''
})
const {firstName,lastName,Gender,email,password,reEnterPassword} = user

const handelChange=(event)=>{
    event.preventDefault()
    const  value=event.target.value
     const name=event.target.name
     setUser({...user,[name]:value})
     
 }

 
 
 

    return(
        <ValueContext.Provider value={{user,setUser,handelChange}}>
            {children}
        </ValueContext.Provider>
    )
}

export default ValueContextProvider