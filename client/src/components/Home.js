import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../actions'
import Card from './Card';
import { Link } from 'react-router-dom';
import Paginado from './Paginado'
import '../css/Home.css'

import NavBar from './NavBar';

export default function Home() {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes)
    // Paginado:
    const [actualPage, setActualPage] = useState(1)
    const [recipesPerPage, /*_setDogsPerPage*/] = useState(8); // Me guardo cuantos perros quiero por página.
    const indexOfLastRecipe = actualPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const actualRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    // const [/*_orden*/, setOrden] = useState(''); // Estado local que me sirve para modificar el estado cuando ordeno y renderizar los perros ordenados como quiero.

    const paginado = (numPage) => {
        setActualPage(numPage);
    }

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

   
    return (
        <div className='CONTEINERR'>
            <NavBar
            setActualPage={setActualPage}
            />
            <ul className='conteiner'>
                    {
                        actualRecipes.map((el) => {
                            return (
                                <div key={el.id}>
                                    <Link to={'/home/' + el.id} style={{ textDecoration: 'none' }} >
                                        <Card
                                            title={el.title}
                                            image={el.image}
                                            diets={el.diets}
                                            key={el.id}
                                        />
                                    </Link>
                                </div>
                            )
                        })
                    }
                
            </ul>
            <div>
                    <Paginado
                        recipes={recipes.length}
                        recipesPerPage={recipesPerPage}
                        paginado={paginado}
                    />
            </div>
        </div>
    )
}

