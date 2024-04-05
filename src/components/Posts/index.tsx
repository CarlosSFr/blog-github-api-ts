import { PostsContainer } from "./styles";
import {ptBR} from "date-fns/locale/pt-BR"
import { formatDistanceToNow } from "date-fns"

interface PostsProps {
    title: string,
    content: string,
    postDate: Date,
}

export function Posts({title, content, postDate}: PostsProps){

    return (
        <PostsContainer>
            <div>
                <h3>{title}</h3>
                <span>{formatDistanceToNow(postDate, {
                    addSuffix: true,
                    locale: ptBR,
                })}</span>
            </div>
            <p>
                {content}
            </p>
        </PostsContainer>
    )
}