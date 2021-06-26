import Recipes from "../Recipes"

export default function Search({ sampleData }) {
    return(
        <div className='search'>
            <form>
                <label htmlFor='searchQuery'>🔍</label>
                <input 
                type='text'
                id='searchQuery'
                placeholder='Search for an ingredient'
                 />
                <button type='submit'>FIND</button>
            </form>
            <Recipes sampleData={sampleData}/>
        </div>
    )
}