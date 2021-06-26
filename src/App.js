import { Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Recipe from './components/Recipe';

const sampleData = [
  {
    label: "Frothy Iced Matcha Green Tea Recipe",
    image: "https://www.edamam.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg",
    url: "http://www.seriouseats.com/recipes/2016/08/iced-matcha-green-tea-recipe.html",
    ingredientLines: [
      "2 teaspoons (6g) Japanese matcha green tea (see note above)",
      "8 ounces (235ml) cold water"
    ],
    dietLabels: [
      "High-Protein",
      "Low-Fat"
    ],
    calories: 0.06,
    yield: 2
  },
  {
    label: "Corn Tortilla",
    image: "https://www.edamam.com/web-img/3a1/3a134b216e935d9866a57e4d6c4e742d.jpg",
    url: "http://norecipes.com/blog/2009/07/23/how-to-make-tortillas/",
    ingredientLines: [
      "2 C masa harina",
      "1/2 tsp salt kosher salt (less if using table salt)",
      "1 1/4 C warm water"
    ],
    dietLabels: [
      "Low-Fat"
    ],
    calories: 827.6400000000001,
    yield: 4
  },
  {
    label: "Chopstick Ready Rice",
    image: "https://www.edamam.com/web-img/099/0995e680f24efa8d1b369326ed889eb6.jpg",
    url: "https://www.epicurious.com/recipes/food/views/chopstick-ready-rice-51240420",
    ingredientLines:[
      "2 cups shortgrain white rice",
      "2 cups water"
    ],
    dietLabels: [
      "Low-Fat"
    ],
    calories: 1404,
    yield: 8
  },
  {
    label: "Annatto Oil Recipe",
    image: "https://www.edamam.com/web-img/b5a/b5a5553cd6b6b72968466a9a5db0f80b.jpg",
    url: "https://www.chowhound.com/recipes/annatto-oil-10483",
    ingredientLines:[
      "1/2 cup annatto seeds",
      "2 cups mild olive oil or other vegetable oil"
    ],
    dietLabels: [
      "Low-Carb"
    ],
    calories: 4105.704000004849,
    yield: 12
  },
  {
    label: "Pub-style pork scratchings",
    image: "https://www.edamam.com/web-img/6c7/6c764aaddab053b8a962b44474cb735d.jpg",
    url: "http://www.jamieoliver.com/recipes/pork-recipes/pub-style-pork-scratchings/",
    ingredientLines: [
      "1/2 cup annatto seeds",
      "2 cups mild olive oil or other vegetable oil"
    ],
    dietLabels: [
      "Low-Carb"
    ],
    calories: 4105.704000004849,
    yield: 8
  },
  {
    label: "Fresh Corn Tortillas recipes",
    image: "https://www.edamam.com/web-img/1a7/1a7b1689c96d91d2b891aa3ba40f34fd",
    url: "http://www.bonappetit.com/recipe/fresh-corn-tortillas",
    ingredientLines:[
      "2 cups (or more) masa (corn tortilla mix; preferably Maseca brand)",
      "1/2 teaspoon kosher salt",
      "vegetable oil"
    ],
    dietLabels: [
      "Low-Fat"
    ],
    calories: 855.3428656666815,
    yield: 24
  }
]

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Route path="/" exact render={()=> <Home sampleData={sampleData}/> }/>
        <Route path="/about" exact render={()=> <About /> }/>
        <Route path="/search" exact render={()=> <Search sampleData={sampleData}/> }/>
        <Route path="/recipe/:label" exact render={()=> <Recipe sampleData={sampleData}/> }/>
      </main>
    </div>
  );
}

export default App;
