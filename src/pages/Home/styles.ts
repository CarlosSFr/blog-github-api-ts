import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: -5.5rem;
    padding-bottom: 14.625rem;

    img{
        height: 9.25rem;
        border-radius: 8px;
    }
    
`
export const ProfileContainer = styled.div`
    display: flex;
    max-width: 54rem;
    background-color: ${props => props.theme["base-profile"]};
    gap: 2rem;
    padding: 2rem 2rem 2rem 2.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        ${props => props.theme["base-text"]};
        line-height: 1.6;
    }

`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;

    a{
        text-decoration: none;
        color: ${props => props.theme["blue"]};
        font-size: 0.75rem;
    }
    h2{
        font-size: 1.5rem;
        color: ${props => props.theme["base-title"]};
        line-height: 1.3;
    }

`
export const FooterContainer = styled.div`
    display: flex;
    align-items: center;    
    gap: 1.5rem;

    svg{
        color: ${props => props.theme["base-label"]};
    }

    span{
        color: ${props => props.theme["base-subtitle"]};
    }

`
export const PostsContainer = styled.div`
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    width: 54rem;
`

export const TitlePosts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.75rem;

    h3{
        font-size: 1.125rem;
        line-height: 1.6;
        color: ${props => props.theme["base-subtitle"]};
    }
    span{
        font-size: 0.875rem;
        line-height: 1.6;
        color: ${props => props.theme["base-span"]};
    }
`

export const PostsHomeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    a{
        text-decoration: none;
    }

`



