export default function About(){
    return (
        <>
        <h1>ABOUT</h1>
        <div className='about'>
            <div className='about-items'>
                <p>Having knowledge on nutrition, not only help with maintaining a healthy weight but it also can help reduce the risk of some disease. <br></br>Nutritious Recipes is an app that allows anyone to search up recipes based on their dietary needs or their choice in ingredients. <br></br>Nutritious Recipes uses data from Edamam API. For more information regarding the API, please go to the Edamam website.</p>
            </div>
            <div className='about-items'>
                <img src='https://www.edamam.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg' alt='Green Tea' />
            </div>
            {/* <div id="edamam-badge" data-color="white"></div> */}
        </div>
        </>
    )
}