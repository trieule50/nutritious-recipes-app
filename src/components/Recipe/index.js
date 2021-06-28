import { useState, useEffect } from 'react';

export default function Recipe( routeProps ){
    // console.log(routeProps)

    const [uniqueRecipe, setUniqueRecipe] = useState([]);
    const name = routeProps.match.params.recipe+routeProps.match.params.label;
    // const { recipe } = routeProps.recipes
    // console.log(name);
    // console.log(routeProps.searchOptions); 

    const getApiData = async () =>{
        const apiEndPoint = `${routeProps.searchOptions.api}q=${name}&app_id=${routeProps.searchOptions.id}&app_key=${routeProps.searchOptions.key}&health=${routeProps.searchHealth}`
        try{
            const response = await fetch(apiEndPoint, {
                mode: 'cors'
            });
            const data = await response.json();
            // console.log(data);
            setUniqueRecipe(data.hits[0].recipe);
        }catch(error){
            console.log(error)
        }
    }

    console.log(uniqueRecipe);

    useEffect(()=>{
        getApiData();
    },[])

    return (
        <div>
                <h1>{name}</h1>
                <img src={uniqueRecipe.image} alt={uniqueRecipe.label} />
                <p>This recipe can be found <a href={uniqueRecipe.url}target='_blank'>here.</a></p>
                <ul className='ingredients'>
                <h4>Ingredients:</h4>
                    {uniqueRecipe.ingredientLines.map((ingredient, i)=>{
                        return(
                            <li key={i}>
                                {ingredient}
                            </li>
                        )
                    })}
                </ul>
                <ul className="diet-labels">
                <h4>Diet Labels:</h4>
                    {uniqueRecipe.dietLabels.map((label, i)=>{
                        return(
                            <li key={i}>
                                    {label}
                            </li>
                        )
                    })}
                </ul>
                <p>Calories: {uniqueRecipe.calories.toFixed(2)}</p>
                <p>This recipe yield: {uniqueRecipe.yield}</p>
        </div>
    )
}
