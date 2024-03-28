import { GithubLogo } from "phosphor-react";
import { HeaderContainer } from "./styles";


export function Header(){
    return (
        <HeaderContainer>
            <GithubLogo size={48} weight="bold" /> 
            <h1>GITHUB BLOG</h1>
        </HeaderContainer>
    )
}