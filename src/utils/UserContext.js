import { createContext } from "react";

const UserContext = createContext()

const UserProvider = ({children})=>{
    let loggedInUser = false;
    return(
        <UserContext.Provider value={loggedInUser}>
            {children}
        </UserContext.Provider>
    )
}
export {UserContext,UserProvider};