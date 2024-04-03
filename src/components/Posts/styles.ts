import styled from "styled-components";

export const PostsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    max-width: 26rem;
    padding: 2rem;
    gap: 1.25rem;
    border: 1px solid transparent;
    transition: 0.2s all ease-in-out;

    &:hover{
        border: 1px solid ${props => props.theme["base-label"]};
        cursor: pointer;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        h3{
            font-size: 1.25rem;
            line-height: 1.6;
            color: ${props => props.theme["base-title"]};
        }
        span{
            color: ${props => props.theme["base-span"]};
            font-size: 0.875rem;
            line-height: 1.6;
        }
    }
    p{
        color: ${props => props.theme["base-text"]};
        font-size: 1rem;
        line-height: 1.6;
        max-height: 6rem;
        overflow: hidden;
        
    }


`