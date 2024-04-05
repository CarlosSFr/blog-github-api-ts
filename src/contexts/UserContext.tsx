import { createContext, useEffect, useState } from "react";
import { api } from "../lib/UserConfig";

interface UserInterface {
    login: string,
    avatar_url: string,
    company: string,
    followers: number,
    bio: string
}

interface IssueInterface {
    title: string,
    body: string,
    created_at: Date,
}

interface UserContextType {
    user: UserInterface,
    getIssues: (query?: string) => Promise<void>,
    issues: IssueInterface[],
}

interface UserProviderProps {
    children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps){

    const [ user, setUser ] = useState<UserInterface>({
        login: "",
        avatar_url: "",
        company: "",
        followers: 0,
        bio: ""
    });

    const [ issues, setIssues ] = useState<IssueInterface[]>([]);

    async function fetchUserData(){
        const response = await api.get("/users/CarlosSFr");
        setUser(response.data);
    }

    async function getIssues(query?: string){
        
        if(query){
            const repo = "blog-github-api-ts"
            const userName = "CarlosSFr"
    
            const response = await api.get(`/search/issues?q=${query}%20repo:${userName}/${repo}`);
            setIssues(response.data.items);
        }else{
            const response = await api.get("repos/CarlosSFr/blog-github-api-ts/issues");
            setIssues(response.data);
        } 
    }

    useEffect(() => {
        fetchUserData();
        getIssues();
    }, []);

    return (
        <UserContext.Provider value={{
            user,
            getIssues,
            issues
        }}>
            {children}
        </UserContext.Provider>
    )
}
