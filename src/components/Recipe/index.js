import { useState, useEffect } from 'react';

export default function Recipe({ sampleData}){
    return (
        <div>
            {sampleData.map((data, i) =>{
                return(
                    <div key={i}>
                        <h1>{data.label}</h1>
                        <img src={data.image} alt={data.label} />
                        <p>This recipe can be found <a href={data.url}target='_blank'>here.</a></p>
                        <ul className='ingredients'>
                            <h4>Ingredients:</h4>
                            {data.ingredientLines.map((ingredient, i)=>{
                            return(
                                <li key={i}>
                                    {ingredient}
                                </li>
                            )
                            })}
                        </ul>
                        <ul className="diet-labels">
                            <h4>Diet Labels:</h4>
                            {data.dietLabels.map((label, i)=>{
                                return(
                                    <li key={i}>
                                        {label}
                                    </li>
                                )
                            })}
                        </ul>
                        <p>Calories: {data.calories.toFixed(2)}</p>
                        <p>This recipe yield: {data.yield}</p>
                    </div>
                )
            })}
        </div>
    )
}
