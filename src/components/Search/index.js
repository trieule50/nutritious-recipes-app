import Recipes from "../Recipes";
import meal from './meal.png';

export default function Search({ recipes, handleChange, handleSubmit, searchString, search, error}) {
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