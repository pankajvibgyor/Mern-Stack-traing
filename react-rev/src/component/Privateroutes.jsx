import { useContext } from 'react';
import {
  Route,
 
  Navigate,
  Routes
} from 'react-router-dom';
import { ValueContext } from '../contextComponent/Valuecontext';
import Alluser from './Alluser';
const Privateroutes= () => {
  const{user}=useContext(ValueContext)
  const userLoggedIn = localStorage.getItem(user);
  return (
    <Routes>
    <Route
     
      render={() => (
        userLoggedIn
          ? <Alluser/>
          : (
            <Navigate to='/'
            />
          )
      )}
    />
    </Routes>
  );
};

export default Privateroutes 
//  import React from 'react';
//  import { Navigate, Route } from 'react-router-dom';

// function  Privateroutes({ isAuth: isAuth ,component:Component,...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={(props) => {
//           if(isAuth){
//             return <Component/>
//           }
//           else {
//             return <Navigate to={{pathname:"/login",state: {from:props.location}}}/>  

//          } }}/>    
//     )}
// export default Privateroutes 
// import React,{useLocation} from 'react';
// import { Navigate, Route } from 'react-router-dom';

// function Privateroutes({ children }) {
//   let auth = true;
//   let location = useLocation();

//   if (!auth.user) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   return children;
// }
// export default Privateroutes


// import React,{useLocation} from 'react';
// import { Navigate} from 'react-router-dom';
// import useAuth from '../component2/useAuth'
// const Privateroutes = ({ children }) => {
//     const { authed } = useAuth();
//   const location = useLocation();

//   return authed === true
//     ? children
//     : <Navigate to="/login" replace  state={{ path: location.pathname }} />;

// }
// export default Privateroutes
// import { } from 'react-router-dom';
// import React from 'react';
// import {HomeModule,Outlet,Navigate} from 'react-router-dom';

// export default function Privateroutes() {


//   return Auth ? (
//     <HomeModule>
//         <Outlet />
//     </HomeModule>
// ) : (
//     <Navigate to="/login" replace />
// );
// }