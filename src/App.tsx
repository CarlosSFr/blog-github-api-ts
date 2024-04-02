import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./components/Router"
import { UserProvider } from "./contexts/UserContext"


function App() {

  return (
    <>
    <ThemeProvider theme={defaultTheme} >
      <UserProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </UserProvider>
      <GlobalStyle /> 
    </ThemeProvider>
      
    </>
  )
}

export default App
