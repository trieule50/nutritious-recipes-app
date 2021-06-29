import Recipes from "../Recipes";
import meal from './meal.png';

export default function Search({ recipes, handleQueryChange, handleQuerySubmit, searchString, search, error, handleSelect }) {
    return(
        <div className='search'>
            <form onSubmit={handleQuerySubmit}>
                <label htmlFor='searchQuery'><img src={meal}/></label>
                <input 
                type='text'
                id='searchQuery'
                placeholder='Search for an ingredient'
                onChange={handleQueryChange}
                value={searchString}
                 />
                <label htmlFor='health'>Diet Restriction</label>
                <select id='health' name='health' onChange={handleSelect}>
                    <option value=''>Select One</option>
                    <option value='gluten-free' >Gluten-free</option>
                    <option value='keto-friendly'>Keto-friendly</option>
                    <option value='low-sugar'>Low-sugar</option>
                    <option value='shellfish-free'>Shellfish-free</option>
                    <option value='vegetarian'>Vegetarian</option>
                    <option value='vegan'>Vegan</option>
                </select>
                <button type='submit'>FIND</button>
            </form>
            {search && !error &&(
                <Recipes 
                recipes={recipes}
            />
            )}
            {search && error && (
                <h1>error</h1>
            )}    
        </div>
    )
}