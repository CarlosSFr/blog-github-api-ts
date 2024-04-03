import { PostsContainer } from "./styles";

interface PostsProps {
    title: string,
    content: string,
}

export function Posts({title, content}: PostsProps){
    return (
        <PostsContainer>
            <div>
                <h3>{title}</h3>
                <span>Há 1 dia</span>
            </div>
            <p>
                {content}
            </p>
        </PostsContainer>
    )
}