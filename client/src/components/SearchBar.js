import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { getnameRecipes } from "../actions"
import '../css/SearchBar.css'



export default function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }

    

    function handleSubmit(e){
        e.preventDefault();
        var found = getnameRecipes(name);
        dispatch(found)
        setName('');
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                type='text'
                placeholder='Search by breed...' 
                onChange={e => handleInputChange(e)}
                value={name}
                className="input"
            />
            <button className='btn-search' type='submit'>Search</button>
        </form>
    )
}