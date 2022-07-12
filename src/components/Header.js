import React from 'react'
import {StyledHeader} from "./styles/Header.styled"
import { Container } from './styles/Container.styled'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
      <Nav>
        <Logo src="./images/logo.svg" alt=""/>
       <Button>Try it for free</Button>
      </Nav>
      </Container>
      
     </StyledHeader>
  )
}

export default Header
