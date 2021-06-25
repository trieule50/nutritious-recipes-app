import { Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Route path="/" exact render={()=> <Home /> }/>
        <Route path="/about" exact render={()=> <About /> }/>
        <Route path="/search" exact render={()=> <Search /> }/>
      </main>
    </div>
  );
}

export default App;
