import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faChevronLeft, faArrowUpRightFromSquare, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons"
import { DescriptionContainer, DescriptionFooter, DescriptionHeader, PostPageContainer, PostsDescriptionContainer } from "./styles";
import { NavLink } from "react-router-dom";


export function PostPage(){
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
                <h1>Project title developer</h1>
                <DescriptionFooter>
                    <div><FontAwesomeIcon icon={faGithub} /> <span>CarlosSFr</span></div>
                    <div><FontAwesomeIcon icon={faCalendar} /> <span>Há 1 dia</span></div>
                    <div><FontAwesomeIcon icon={faComment} /> <span>{12} seguidores</span></div>
                </DescriptionFooter>
            </DescriptionContainer>
            <PostsDescriptionContainer>
                <p>
                Programming languages all have built-in 
                data structures, but these often differ from 
                one language to another. This article attempts 
                to list the built-in data structures available in 
                JavaScript and what properties they have. These can 
                be used to build other data structures. Wherever possible, 
                comparisons with other languages are drawn.

                Dynamic typing
                JavaScript is a loosely typed and dynamic language. 
                Variables in JavaScript are not directly associated with
                 any particular value type, and any variable can be assigned 
                 (and re-assigned) values of all types:

                </p>
            </PostsDescriptionContainer>
        </PostPageContainer>
    )
}