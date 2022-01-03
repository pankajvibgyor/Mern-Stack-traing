import { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { NavLink } from 'react-router-dom';

function ChangePassword() {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const [show ,setShow]=useState("false")
    
// Fuction on Submit

 const resetPass=(e)=>{ 
    e.preventDefault();
    let data={email, otp, password}
    if(!data.password){
       toast.error("Password Can't be blank...",
       {
           position:"top-center"
       });
        
    }


   //  if(data.otp){

   //  }
    if(data.otp){
    fetch("http://localhost:4000/matchpass",{ method :'POST', headers:{'Accept':'application/json', 'Content-Type':'application/json'},
       body:JSON.stringify(data)
   } ).then((result)=>{
    // alert(result.data.message)
      console.log(data.email)
      setEmail(data.email)
      setPass(data.password)
      setOtp(data.otp)

   })}
   else{

          }




        
    
}
const [counter, setCounter] = useState(60);
useEffect(() => {
    const timer =
    counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
}, [counter]);


    return (
        <>
        
        <br></br>

        <div className="col-sm-6 offset-sm-3" style={{ backgroundColor: "#gff" }}>
            <center > <h1>Reset Password</h1></center >
            <form>
                <div className="form-group">

                 <input type="text" className='form-control' placeholder="Email address" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  <input type="text" className='form-control' placeholder="Otp" name="OTP" value={otp}  onChange={(e) => { setOtp(e.target.value) }} />
                    <br/><input type="password" className='form-control' placeholder="New Password" name="newPassword" value={password}  onChange={(e) => { setPass(e.target.value) }} />
                    <br/>
                </div>
            
               <center> <button className="btn btn-primary btn-block" onClick={resetPass} >Verify</button></center>
               
             <h3 style={{color:"red", marginLeft:"8rem"}}>Resend Otp In:: <span style={{ color:"green",fontWeight:"bold"}}> 00:{counter}</span></h3>   
            <h3 style={{textDecoration:"underLine", marginLeft:"8rem"}}><NavLink to="/passwordreset">Resend otp</NavLink></h3>
            </form>
            
        </div>
    </>
    );

};
export default ChangePassword
