 import React ,{useState,createContext, useEffect} from "react";
export const ValueContext=createContext()

function ValueContextProvider({children}){

const [Auth,setAuth]=useState(false)
const[user ,setUser]=useState({
    firstName:'',
    lastName:'',
    Gender:'',
    email:'',
    password:'',
    reEnterPassword:''
})


const handelChange=(event)=>{
    event.preventDefault()
    const  value=event.target.value
     const name=event.target.name
     setUser({...user,[name]:value})
     
 }

    return(
        <ValueContext.Provider value={{user ,Auth ,setAuth,setUser,handelChange}}>
            {children}
        </ValueContext.Provider>
    )
}

export default ValueContextProvider