import React ,{createContext, useState} from "react";
const authContext =createContext();
function useAuth(){
    const [authed,setAuthed]=useState(false)
    return{
        authed,
        Login(){         
                setAuthed(true)               
            
        },
       
}

export function AuthProvider({ children }) {
    const auth = useAuth();
  
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
  }
  
  
}
export default AuthProvider