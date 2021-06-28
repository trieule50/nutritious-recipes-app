import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Recipe from './components/Recipe';

function App() {

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
        try{
            const response = await fetch(apiEndPoint, {
                mode: 'cors'
            });
            const data = await response.json();
            // console.log(data);
            setRecipes(data.hits);
        }catch(error){
            console.log(error)
        }
    }

    // console.log(recipes);

    useEffect(()=>{
        getApiData();
    },[])

  return (
    <div className="App">
      <Navigation />
      <main>
        <Route path="/" exact render={()=> <Home/> }/>
        <Route path="/about" exact render={()=> <About /> }/>
        <Route path="/search" exact render={()=> <Search searchString={searchString} recipes={recipes} handleSubmit={handleSubmit} handleChange={handleChange}/>}/>
        <Route path="/recipe/:recipe:label" exact render={( routeProps )=> <Recipe {...routeProps} searchOptions={searchOptions} searchHealth={searchHealth}/> }/>
      </main>
    </div>
  );
}

export default App;
