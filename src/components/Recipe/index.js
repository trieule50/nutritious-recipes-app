import { useState, useEffect } from 'react';

export default function Recipe( routeProps ){
    console.log(routeProps)

    const [uniqueRecipe, setUniqueRecipe] = useState(null);
    const name = routeProps.match.params.recipe+routeProps.match.params.label;

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
    
    const handleClick = (event) =>{
        window.open(`${uniqueRecipe.url}`)
      }

    if (!uniqueRecipe){
        return <h1>Loading...</h1>;
    }else{
    return (
        <div className='recipe'>
            <h1>{name}</h1>
            <img src={uniqueRecipe.image} alt={uniqueRecipe.label}/>
            <p>This recipe was souced by <span style={{fontStyle:'italic', fontWeight:'bold'}}>{uniqueRecipe.source}</span></p>
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
            <h4>Nutrient Facts:</h4>
            <table>
                <tr>
                    <th>Nutrients</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>{uniqueRecipe.totalNutrients.FAT.label}</td>
                    <td>{uniqueRecipe.totalNutrients.FAT.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.FAT.unit}</td>
                </tr>
                <tr>
                    <td>{uniqueRecipe.totalNutrients.CHOLE.label}</td>
                    <td>{uniqueRecipe.totalNutrients.CHOLE.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.CHOLE.unit}</td>
                </tr>
                <tr>
                    <td>{uniqueRecipe.totalNutrients.NA.label}</td>
                    <td>{uniqueRecipe.totalNutrients.NA.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.NA.unit}</td>
                </tr>
                <tr>
                    <td>{uniqueRecipe.totalNutrients.CHOCDF.label}</td>
                    <td>{uniqueRecipe.totalNutrients.CHOCDF.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.CHOCDF.unit}</td>
                </tr> 
                <tr>
                    <td>{uniqueRecipe.totalNutrients.PROCNT.label}</td>
                    <td>{uniqueRecipe.totalNutrients.PROCNT.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.PROCNT.unit}</td>
                </tr>
                <tr>
                    <td>{uniqueRecipe.totalNutrients.VITD.label}</td>
                    <td>{uniqueRecipe.totalNutrients.VITD.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.VITD.unit}</td>
                </tr>
                <tr>
                    <td>{uniqueRecipe.totalNutrients.FE.label}</td>
                    <td>{uniqueRecipe.totalNutrients.FE.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.FE.unit}</td>
                </tr>
                <tr>
                    <td>{uniqueRecipe.totalNutrients.CA.label}</td>
                    <td>{uniqueRecipe.totalNutrients.CA.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.CA.unit}</td>
                </tr>
                <tr>
                    <td>{uniqueRecipe.totalNutrients.K.label}</td>
                    <td>{uniqueRecipe.totalNutrients.K.quantity.toFixed(2)}{uniqueRecipe.totalNutrients.K.unit}</td>
                </tr>
            </table>
            <button onClick={handleClick} className='link'>Click for Full Recipe</button>
            <div className='space'></div>
    </div>
    )
}}
