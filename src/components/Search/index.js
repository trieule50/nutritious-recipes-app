import Recipes from "../Recipes";
import { useState, useEffect } from 'react';
import meal from './meal.png';

export default function Search() {

    const [searchString, setSearchString] = useState('chicken');
    const [searchHealth, setSearchHealth] = useState('low-sugar');
    const [recipes, setRecipes] = useState([]);

    const handleChange = (event) =>{
        setSearchString(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getApiData(searchString);
    }

    const searchOptions = {
        key: process.env.REACT_APP_EDAMAM_KEY,
        id: process.env.REACT_APP_EDAMAM_ID,
        api: 'https://api.edamam.com/api/recipes/v2?type=public&'
    }

    const getApiData = async () =>{
        const apiEndPoint = `${searchOptions.api}q=${searchString}&app_id=${searchOptions.id}&app_key=${searchOptions.key}&health=${searchHealth}`;
        // const apiEndPoint = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=48726272&app_key=81b081b0bc77b859d70b6e2bdb5b0851&health=low-sugar';
        try{
            const response = await fetch(apiEndPoint, {
                mode: 'cors'
            });
            const data = await response.json();
            console.log(data);
            setRecipes(data.hits);
        }catch(error){
            console.log(error)
        }
    }

    console.log(recipes);

    useEffect(()=>{
        getApiData();
    },[])

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