import { FooterContainer, HeaderContainer, InfoContainer, MainContainer, PostsContainer, PostsHomeContainer, ProfileContainer, TitlePosts } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { SearchInput } from "./components/SearchInput"
import { Posts } from "../../components/Posts"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export function Home(){

    const { user, issues } = useContext(UserContext)

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
                    <NavLink to="postpage">
                        {issues?.map((item) => {
                            return (
                            <Posts
                                key={issues && item.title}
                                title={issues && item.title}
                                content={issues && item.body}
                            />
                            )
                        })}
                    </NavLink>
                     {/* <Posts /> */}
                   {/* <Posts />
                    <Posts /> */}
                </PostsHomeContainer>
            </PostsContainer>
        </MainContainer>
    )
}