import styled from "styled-components";

export const PostPageContainer = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: -5.5rem;
    padding-bottom: 14.625rem;
`

export const DescriptionContainer = styled.div`
    display: flex;
    width: 54rem;
    background-color: ${props => props.theme["base-profile"]};
    gap: 2rem;
    padding: 2rem 2rem 2rem 2.5rem;
    border-radius: 10px;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h1{
        color: ${props => props.theme["base-title"]};
        font-size: 1.5rem;
        line-height: 1.3;
    }
`

export const DescriptionHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        a{
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        svg{
            width: 0.75rem;
            color: ${props => props.theme["blue"]};
        }
        span{
            font-size: 0.75rem;
            color: ${props => props.theme["blue"]};
            line-height: 1.6;
        }
        &:hover{
            cursor: pointer;
        }
    }
`

export const DescriptionFooter = styled.footer`
    display: flex;
    gap: 2rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg{
            color: ${props => props.theme["base-label"]};
            width: 1.125rem;
        }

        span{
            font-size: 1rem;
            color: ${props => props.theme["base-span"]};
            line-height: 1.6;
        }

    }

`

export const PostsDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 54rem;
    padding: 2.5rem 2rem;
`