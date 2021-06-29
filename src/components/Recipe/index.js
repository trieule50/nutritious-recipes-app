import { useState, useEffect } from 'react';

export default function Recipe( routeProps ){
    // console.log(routeProps)

    const [uniqueRecipe, setUniqueRecipe] = useState(null);
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

    if (!uniqueRecipe){
        return <h1>Loading...</h1>;
    }else{
    return (
        <div className='recipe'>
            <h1>{name}</h1>
            <img src={uniqueRecipe.image} alt={uniqueRecipe.label}/>
            <p>{uniqueRecipe.calories.toFixed(2)} Calories |  {uniqueRecipe.yield} Servings</p>
            <div className='list'>
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
            </div>
            <table>
                <tr>
                    <th>Nutrients</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <th>{uniqueRecipe.totalNutrients.FAT.label}</th>
                    <th>{uniqueRecipe.totalNutrients.FAT.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.FAT.unit}</th>
                </tr>
                <tr>
                    <th>{uniqueRecipe.totalNutrients.CHOLE.label}</th>
                    <th>{uniqueRecipe.totalNutrients.CHOLE.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.CHOLE.unit}</th>
                </tr>
                <tr>
                    <th>{uniqueRecipe.totalNutrients.NA.label}</th>
                    <th>{uniqueRecipe.totalNutrients.NA.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.NA.unit}</th>
                </tr>
                <tr>
                    <th>{uniqueRecipe.totalNutrients.CHOCDF.label}</th>
                    <th>{uniqueRecipe.totalNutrients.CHOCDF.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.CHOCDF.unit}</th>
                </tr> 
                <tr>
                    <th>{uniqueRecipe.totalNutrients.PROCNT.label}</th>
                    <th>{uniqueRecipe.totalNutrients.PROCNT.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.PROCNT.unit}</th>
                </tr>
                <tr>
                    <th>{uniqueRecipe.totalNutrients.VITD.label}</th>
                    <th>{uniqueRecipe.totalNutrients.VITD.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.VITD.unit}</th>
                </tr>
                <tr>
                    <th>{uniqueRecipe.totalNutrients.FE.label}</th>
                    <th>{uniqueRecipe.totalNutrients.FE.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.FE.unit}</th>
                </tr>
                <tr>
                    <th>{uniqueRecipe.totalNutrients.CA.label}</th>
                    <th>{uniqueRecipe.totalNutrients.CA.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.CA.unit}</th>
                </tr>
                <tr>
                    <th>{uniqueRecipe.totalNutrients.K.label}</th>
                    <th>{uniqueRecipe.totalNutrients.K.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.K.unit}</th>
                </tr>
            </table>
            
            <p>This recipe can be found <a href={uniqueRecipe.url}target='_blank'>here.</a></p>
    </div>
    )
}}
