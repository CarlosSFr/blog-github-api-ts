import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faChevronLeft, faArrowUpRightFromSquare, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons"
import { DescriptionContainer, DescriptionFooter, DescriptionHeader, PostPageContainer, PostsDescriptionContainer } from "./styles";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export function PostPage(){

    const { user } = useContext( UserContext )
    const location = useLocation()
    const { title, body } = location.state;

    return (
        <PostPageContainer>
            <DescriptionContainer>
                <DescriptionHeader>
                    <div>
                        <NavLink to="/" >
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <span>VOLTAR</span>
                        </NavLink>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <span>VER NO GITHUB</span>
                    </div> 
                </DescriptionHeader>
                <h1>{title}</h1>
                <DescriptionFooter>
                    <div><FontAwesomeIcon icon={faGithub} /> <span>{user.login}</span></div>
                    <div><FontAwesomeIcon icon={faCalendar} /> <span>Há 1 dia</span></div>
                    <div><FontAwesomeIcon icon={faComment} /> <span>{user.followers} seguidores</span></div>
                </DescriptionFooter>
            </DescriptionContainer>
            <PostsDescriptionContainer>
                <p>
                {body}

                </p>
            </PostsDescriptionContainer>
        </PostPageContainer>
    )
}