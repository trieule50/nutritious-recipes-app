import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Recipe from './components/Recipe';

function App() {

  const [searchString, setSearchString] = useState('');
  const [searchHealth, setSearchHealth] = useState('vegan');
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(false);
  const [error, setError] = useState(false);

  const handleQueryChange = (event) =>{
    setSearchString(event.target.value);
  }

  const handleQuerySubmit = (event) => {
    event.preventDefault();
    console.log(getApiData(searchString, searchHealth));
  }
  
  const handleSelect = (event) =>{
    console.log(event)
    setSearchHealth(event.target.value)
  }
  
  const searchOptions = {
    key: process.env.REACT_APP_EDAMAM_KEY,
    id: process.env.REACT_APP_EDAMAM_ID,
    api: 'https://api.edamam.com/api/recipes/v2?type=public&'
  }
  
  const getApiData = async () =>{
    const apiEndPoint = `${searchOptions.api}q=${searchString}&app_id=${searchOptions.id}&app_key=${searchOptions.key}&health=${searchHealth}`;
    console.log(apiEndPoint);
    if(searchString){
      try{
        const response = await fetch(apiEndPoint, {
          mode: 'cors'
        });
        const data = await response.json();
        // console.log(data);
        setError(false);
        setRecipes(data.hits);
        setSearch(true);
        setSearchString('')
          if (!data.hits.length){
            setError(true);
          }
        }catch(error){
            console.log(error);
            setError(true);
        }
      }
  }

    return (
    <div className="App">
      <Navigation />
      <main>
        <Route path="/" exact render={()=> <Home/> }/>
        <Route path="/about" exact render={()=> <About /> }/>
        <Route path="/search" exact render={()=> <Search 
          searchString={searchString} 
          recipes={recipes} 
          handleQuerySubmit={handleQuerySubmit} 
          handleQueryChange={handleQueryChange} 
          handleSelect={handleSelect}
          search={search} 
          error={error}/>
        }/>
        <Route path="/recipe/:recipe:label" exact render={( routeProps )=> <Recipe 
          {...routeProps} 
          searchOptions={searchOptions} 
          searchHealth={searchHealth}/> 
        }/>
      </main>
      <footer>
        <div id="edamam-badge" data-color="white"></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  );
}

export default App;
