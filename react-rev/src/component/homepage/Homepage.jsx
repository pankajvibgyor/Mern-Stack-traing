import React,{useContext} from 'react'
import "./homepage.css"
import {useNavigate} from 'react-router-dom';
import { ValueContext } from '../../contextComponent/Valuecontext';

function Homepage() {
  const naviagte = useNavigate();

  const logout = () => {
    localStorage.clear();
// you can also like localStorage.removeItem('Token');
    naviagte ("/");
  }
  // const{user,setUser}=useContext(ValueContext)
 

  const handelClick=()=>{    
    naviagte('/alluser');

 }

   
    return (   
        <div className="homepage"> 
  <ul>
  <li><span>home</span></li>
  <li ><span>products</span></li>
  <li onClick={handelClick}><span>alluser</span></li>
  <li><span>contact</span></li>
  </ul>
    
          
    <div className="buton"  onClick={logout}>Logout</div>
    </div>
    )
}
        
export default Homepage
