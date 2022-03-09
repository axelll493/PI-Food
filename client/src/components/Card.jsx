import React from 'react';
import '../css/Card.css'


export default function Card ({ image, title, diets })  {

    let diet= ""
    if (diets) { 
        Array.isArray(diets) 
          ? (diet = diets.map(e => e.name).toString()) 
          : (diet = diets) 
    } 
    return (
        <li className='Card'>
            {image.length > 0 ?
            <img className='Image' src={image} alt="img not found" />: console.log("la imagen no esta")}
                <h2 className='card-title'> {title}</h2>
                <h3 className='card-diets' >{diet}</h3>
        </li>
    );
}

