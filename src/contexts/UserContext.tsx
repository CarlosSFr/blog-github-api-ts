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
}

interface UserContextType {
    user: UserInterface,
    fetchUserData: (query?: string) => Promise<void>,
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

    async function fetchUserData(query?: string){
        const response = await api.get("/users/CarlosSFr", {
            params: {
                q: query,
            }
        });
        setUser(response.data);
    }

    async function getIssues(){
        const response = await api.get("repos/CarlosSFr/blog-github-api-ts/issues");
        setIssues(response.data);
    }
    console.log(issues)
    useEffect(() => {
        fetchUserData();
        getIssues();
    }, []);

    return (
        <UserContext.Provider value={{
            user,
            fetchUserData,
            issues
        }}>
            {children}
        </UserContext.Provider>
    )
}
