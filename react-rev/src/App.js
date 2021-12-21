// import './App.css';
import Homepage from './component/homepage/Homepage';
import Login from './component/login/Login';
import Registration from './component/registration/Registration';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"
// import ArraystateChange from './State/ArraystateChange';
// import Chaleng from './State/Chaleng';
// import Form from './State/Form';
// import Statuschange from './State/Statuschange';
import './App.css'
import { useState ,useEffect } from 'react';
import Alluser from './component/Alluser';
// import Edit from './component/Edit';
import Privateroutes from './component/Privateroutes';
import ValueContextProvider from './contextComponent/Valuecontext'

function App() {
    
  return (
    <ValueContextProvider>
    <div className="App">
       <Router>
      
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/homepage" element={<Privateroutes component={Homepage}/>}/>
          <Route exact path="/register" element={<Registration/>}/>
          <Route exact path='/alluser' element={<Privateroutes component={Alluser}/>}/>
        </Routes>
       
     
    </Router>
  
   
  </div>
  </ValueContextProvider>

  );
}

export default App;
