import React, {useState, createContext } from 'react'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const dataContext= createContext([])
const Contextprovider = (props) => {
    const[user,setLoginUser]=useState({})
    // const navigate = useNavigate();

    const login=()=>{
        axios.post("http://localhost:4000/login",user)
        .then(res=>{alert(res.data.message)
            setLoginUser(res.data.user)
            // navigate('/')
        })
       
    }
    
    
    return (
        <div>
            <dataContext.Provider value={user,login}>
                {props.children}
            </dataContext.Provider>
        </div>
    )
}

export default Contextprovider
