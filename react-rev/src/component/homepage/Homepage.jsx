import React,{useContext} from 'react'
import "./homepage.css"
import {useNavigate} from 'react-router-dom';
import { ValueContext } from '../../contextComponent/Valuecontext';

function Homepage() {
const{setAuth,setUser}=useContext(ValueContext)
  const naviagte = useNavigate();

  const logout = () => {
 
    // const value=localStorage.clear();
    setUser(localStorage.clear()||{})

    setAuth(false)
  }
   
 

  const handelClick=()=>{    
    naviagte('/alluser');

 }
 const Videoplayer=()=>{
   naviagte('/videoplayer')
 }

   
  return (   
  <div className="homepage"> 
  <ul>
  <li><span>home</span></li>
  <li onClick={Videoplayer} ><span>Media Player</span></li>
  <li onClick={handelClick}><span>alluser</span></li>
  <li><span>contact</span></li>
  </ul>
    
          
    <div className="buton"  onClick={logout}>Logout</div>
    </div>
    )
}
        
export default Homepage
