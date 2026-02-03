import { createContext, useContext, useState } from "react";

const AuthContext = createContext()


// Note: I dont think i need this i just have to store the token and use it every time in domain reqs but i need context for domains
// Feat: Add Domain Provider in schema 

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (username, password) => {
        try {
            const exitingToken = localStorage.getItem("token")
            if (exitingToken){
                
            }
        } catch (error) {
            
        }
    }

    return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
}


export const useAuth = () => useContext(AuthContext) 
