import Recipes from "../Recipes"

export default function Search({ sampleData }) {
    return(
        <div className='search'>
            <form>
                <label htmlFor='searchQuery'>SEARCH:</label>
                <input 
                type='text'
                id='searchQuery'
                placeholder='Enter an ingredient to be in dish'
                 />
                <button type='submit'>FIND</button>
            </form>
            <Recipes sampleData={sampleData}/>
        </div>
    )
}