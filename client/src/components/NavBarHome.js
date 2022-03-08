import React from 'react'
import { LogoContainer, Wrapper, Img, Title, MenuItemLinkess } from '../elements/NavBarStyled'
import { Container } from '../elements/NavBarStyled'
import Logo from '../images/logoo.png'
import '../css/NavBar.css'
import { Link } from 'react-router-dom'


export default function NavBarHome() {


  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Img className='Image' src={Logo} alt="img not found" />
          <Title>Cook APP</Title>
          <Link to='/home' style={{ textDecoration: 'none' }}>
            <MenuItemLinkess >
            
              <div >
                HOME
              </div>
              
            </MenuItemLinkess>
          </Link>
        </LogoContainer>

      </Wrapper>

    </Container>
  )
}

