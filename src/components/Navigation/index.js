import { Link } from "react-router-dom"

export default function Navigation (){
    return(
        <header>
            <Link to='/'>
                <h1>Nutritious Recipes</h1>
            </Link>
            <nav>
                <Link to='/'>
                    <h2>HOME</h2>
                </Link>
                <Link to='/about'>
                    <h2>ABOUT</h2>
                </Link>
                <Link to='/search'>
                    <h2>SEARCH</h2>
                </Link>
            </nav>
            
        </header>
    )
}