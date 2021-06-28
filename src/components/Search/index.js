import Recipes from "../Recipes";
import { useState, useEffect } from 'react';
import meal from './meal.png';

export default function Search({ recipes, handleChange, handleSubmit, searchString }) {

    return(
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='searchQuery'><img src={meal}/></label>
                <input 
                type='text'
                id='searchQuery'
                placeholder='Search for an ingredient'
                onChange={handleChange}
                value={searchString}
                 />
                <button type='submit'>FIND</button>
            </form>
            <Recipes recipes={recipes}/>
        </div>
    )
}