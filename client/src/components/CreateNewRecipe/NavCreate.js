import React from 'react'
import NavBarHome from '../NavBarHome'
import NewRecipe from './NewRecipe'
import "./Fondo.css"



function NavCreate() {
  return (
        <div className="Fondo">
        <NavBarHome/>
     <h4 className="Titulo">Create New Recipe</h4>
        <NewRecipe/>
        </div>
  )
}

export default NavCreate