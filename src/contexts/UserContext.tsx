import { createContext, useEffect, useState } from "react";
import { api } from "../lib/UserConfig";

interface UserInterface {
    login: string,
    avatar_url: string,
    company: string,
    followers: number,
    bio: string
}

interface UserContextType {
    user: UserInterface | undefined
}

interface UserProviderProps {
    children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps){

    const [ user, setUser ] = useState<UserInterface | undefined>(undefined)

    async function fetchUserData(){ // Utilizando o Axios ao inves do fetch.
        const response = await api.get("/users/CarlosSFr")
        setUser(response.data)
    }

    useEffect(() => {
        // fetch("https://api.github.com/users/CarlosSFr")
        // .then(response => response.json())
        // .then(data => {
        //     setUser(data)
        // })
        fetchUserData()
    }, [])

    return (
        <UserContext.Provider value={{
            user
        }}>
            {children}
        </UserContext.Provider>
    )
}