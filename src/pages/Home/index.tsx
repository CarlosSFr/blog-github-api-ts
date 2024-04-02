import { FooterContainer, HeaderContainer, InfoContainer, MainContainer, PostsContainer, PostsHomeContainer, ProfileContainer, TitlePosts } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { SearchInput } from "./components/SearchInput"
import { Posts } from "../../components/Posts"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

interface UserInterface {
    login: string,
    avatar_url: string,
    company: string,
    followers: number,
    bio: string
}

export function Home(){

    const [ user, setUser ] = useState<UserInterface | undefined>(undefined)

    useEffect(() => {

        fetch("https://api.github.com/users/CarlosSFr")
        .then(response => response.json())
        .then(data => {
            setUser(data)
        })
        
    }, [])
    
    return (
        <MainContainer>
            <ProfileContainer>
                <img src="https://avatars.githubusercontent.com/u/93332419?v=4" alt="" />
                <InfoContainer>
                    <HeaderContainer>
                        <h2>Carlos Eduardo</h2>
                        <a href="https://github.com/CarlosSFr">GITHUB <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></a>
                    </HeaderContainer>
                    {user && <span>{user.bio}</span>}
                    <FooterContainer>
                        <div><FontAwesomeIcon icon={faGithub} /> {user && <span>{user.login}</span>}</div>
                        <div><FontAwesomeIcon icon={faBuilding} /> {user && <span>{user.company}</span>}</div>
                        <div><FontAwesomeIcon icon={faUserGroup} /> {user && <span>{user.followers} seguidores</span>}</div>
                    </FooterContainer>
                </InfoContainer>
            </ProfileContainer>
            <PostsContainer>
                <TitlePosts>
                    <h3>Publicações</h3>
                    <span>{4} publicações</span>
                </TitlePosts>
                <SearchInput />
                <PostsHomeContainer>
                    <NavLink to="postpage"><Posts /></NavLink>
                    <Posts />
                    <Posts />
                    <Posts />
                </PostsHomeContainer>
            </PostsContainer>
        </MainContainer>
    )
}