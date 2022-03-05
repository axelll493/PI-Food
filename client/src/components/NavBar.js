import React, { useState, useEffect } from 'react'
import { LogoContainer, Menu, MenuItem, Wrapper, MenuItemLink, MobileIcon, Img, Img2, MenuItems, MenuItemLinks, Title, MenuItemLinke } from '../elements/NavBarStyled'
import Hamburger from '../images/Hamburgerr.png'
import Home from '../images/homm.png'
import { Container } from '../elements/NavBarStyled'
import Recipe from '../images/recipeee.png'
import Logo from '../images/logoo.png'
import SearchBar from './SearchBar'
import '../css/NavBar.css'

import { filterByType, getTypes, getOrdenamientoRecipes, getOrdenamientoScore } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function NavBar({ setActualPage }) {
  const [showMobileMenu, setshowMobileMenu] = useState(false)
  const allDiets = useSelector((state) => state.diets);
  const dispatch = useDispatch()
  const [/*_orden*/, setOrden] = useState(''); 

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  function handleFilterDiets(e) {
    e.preventDefault();
    setActualPage(1);
    dispatch(filterByType(e.target.value))
  }
  function handleSortByTitle(e) {
    e.preventDefault();
    dispatch(getOrdenamientoRecipes(e.target.value));
    setActualPage(1);
    setOrden(`Ordenado ${e.target.value}`);
}
function handleSortByScore(e) {
  e.preventDefault();
  dispatch(getOrdenamientoScore(e.target.value));
  setActualPage(1);
  setOrden(`Ordenado ${e.target.value}`);
}
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Img className='Image' src={Logo} alt="img not found" />
          <Title>Cook APP</Title>
          <Link to='/home' style={{ textDecoration: 'none' }}>
            <MenuItemLinke >
            
              <div >
                HOME
              </div>
              
            </MenuItemLinke>
          </Link>
          <Link to='/newrecipe' style={{ textDecoration: 'none' }}>
          <MenuItemLinke>
            <div>
              CREATE RECIPE
            </div>

          </MenuItemLinke>
          </Link>
          {/* si esta en verdadero cambialo a verdadero si esta falso
         cambialo a falso */}
          <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)}>
            <Img2 className='Image' src={Hamburger} alt="img not found" />
          </MobileIcon>
        </LogoContainer>
        <Menu open={showMobileMenu} >

          <MenuItems>
            <MenuItemLinks>
              <div>
                <img src={Home} alt="img not found" />
                Home
              </div>
            </MenuItemLinks>
          </MenuItems>
          <MenuItems>
            <MenuItemLinks>
              <div>
                <img src={Recipe} alt="img not found" />
                CREATE RECIPE
              </div>
            </MenuItemLinks>
          </MenuItems>
          <MenuItem>
            <MenuItemLink>
              <div>
                <select className='Select' onChange={e => handleSortByTitle(e)}>
                  <option value='' selected disabled hidden>Sort</option>
                  <option value='asc'  >A - Z</option>
                  <option value='desc'  >Z - A</option>
                </select>
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <div>
                <select className='Select' onChange={e => handleFilterDiets(e)} >
                  <option key={0} value='all'>Diets</option>
                  {allDiets?.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  }).map(el => {
                    return (
                      <option key={el.id} value={el.name}>{el.name}</option>
                    )
                  })}
                </select>
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <div>
                <select className='Select'>
                  <option value='' selected disabled hidden>All Recipes</option>
                  <option value='api'>Existent recipes</option>
                  <option value='created'>Created recipes</option>
                </select>
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <div>
                <select className='Select' onChange={e => handleSortByScore(e)}>
                  <option value='' selected disabled hidden >Punctuation</option>
                  <option value='dec'>High</option>
                  <option value='acd'>Low</option>
                </select>
              </div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <div>
                <SearchBar />
              </div>
            </MenuItemLink>
          </MenuItem>
        </Menu>

      </Wrapper>

    </Container>
  )
}

export default NavBar