import { createContext, useState } from "react";


export const AuthContext = createContext(false);

export default function AuthContextProvider({children}){

    const [isAuth,setAuth] = useState(false);

    function login(){
        setAuth(true);
    }

    function logout(){
        setAuth(false);
    }

    return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
}