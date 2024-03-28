import styled from "styled-components";

export const HeaderContainer = styled.header`
    /* background-color: ${props => props.theme["base-profile"]}; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    padding: 4rem 0 7.875rem 0;
    background-image: radial-gradient(
        ellipse at bottom, ${props => props.theme["blue"]},
        #14589C 1%,
        ${props => props.theme["base-profile"]} 35%
    );

    svg{
        color: ${props => props.theme["blue"]};
    }

    h1{
        font-size: 1.5rem;
        line-height: 1.6;
        color: ${props => props.theme["blue"]};
    }

`