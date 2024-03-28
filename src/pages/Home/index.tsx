import { FooterContainer, HeaderContainer, InfoContainer, MainContainer, PostsContainer, PostsHomeContainer, ProfileContainer, TitlePosts } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { SearchInput } from "./components/SearchInput"
import { Posts } from "../../components/Posts"
import { NavLink } from "react-router-dom"

export function Home(){
    return (
        <MainContainer>
            <ProfileContainer>
                <img src="https://avatars.githubusercontent.com/u/93332419?v=4" alt="" />
                <InfoContainer>
                        <HeaderContainer>
                            <h2>Carlos Eduardo</h2>
                            <a href="https://github.com/CarlosSFr" target="_blank">GITHUB <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></a>
                        </HeaderContainer>
                        <p> Tristique volutpat pulvinar vel massa, 
                            pellentesque egestas. Eu viverra massa quam 
                            dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                        </p>
                        <FooterContainer>
                            <div><FontAwesomeIcon icon={faGithub} /> <span>CarlosSFr</span></div>
                            <div><FontAwesomeIcon icon={faBuilding} /> <span>Valmet - Paper, Pulp and Energy</span></div>
                            <div><FontAwesomeIcon icon={faUserGroup} /> <span>{12} seguidores</span></div>
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