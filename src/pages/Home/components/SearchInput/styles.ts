import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    padding-bottom: 3rem;

    input{
        flex: 1;
        border-radius: 6px;
        background-color: ${props => props.theme["base-input"]};
        border: 1px solid ${props => props.theme["base-border"]};
        color: ${props => props.theme["base-text"]};
        line-height: 1.6;
        padding: 0.75rem 1rem;

        &::placeholder{
            color: ${props => props.theme["base-label"]};
        }
        &:focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${props => props.theme["blue"]};
        }
        
    }
    

`