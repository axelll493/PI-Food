import React from 'react';
import '../css/Paginado.css'


export default function Paginado({ recipes, recipesPerPage, paginado }) {
    const numbersPage = []
    console.log(Math.ceil(recipes / recipesPerPage))
    for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
        numbersPage.push(i)
    }

    return (
        <nav>
            <ul className='paginado'>
            {numbersPage && numbersPage.map(number => (
                <li key={number}>
                    <button key={number} onClick={() => paginado(number)}><strong>{number}</strong></button>
                </li>
                ))}
            </ul>
        </nav>
    )
}