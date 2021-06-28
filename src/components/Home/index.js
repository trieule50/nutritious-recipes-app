import { Carousel } from "react-bootstrap";

export default function Home() {

    const imagesCarousel = [
        {
            label: "Poppy-seed crusted Chicken",
            image: "https://www.edamam.com/web-img/369/369b1ba45563c30b2029ddc4eb4de3a5.png"
        },
        {
            label: "Crisp Prosciutto",
            image: "https://www.edamam.com/web-img/548/54815a72462a3602eabfcc0120ba5b42.jpg"
        },
        {
            label: "Fennel- And Coriander-Spiced Salmon Fillets",
            image: "https://www.edamam.com/web-img/be7/be7cc1a73ffb7e37f8a8d0afb1dc4492.jpg"
        },
        {
            label: "Asado de Tira",
            image: "https://www.edamam.com/web-img/5ca/5ca755497de8d74039e002302441d6b1.jpg"
        },
        {
            label: "Boiled or Steamed Lobsters",
            image: "https://www.edamam.com/web-img/92f/92fb2dd73f65a45ec60d11c9a46f16e6.jpg"
        },
        {
            label: "Frothy Iced Matcha Green Tea Recipe",
            image: "https://www.edamam.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg"
        },
        {
            label: "Spice-Roasted Porterhouse Steaks",
            image: "https://www.edamam.com/web-img/59e/59ed14aefa30b0b53b23938b151a190b.jpg"
        },
        {
            label: "Pub-style pork scratchings",
            image: "https://www.edamam.com/web-img/6c7/6c764aaddab053b8a962b44474cb735d.jpg",
        },
        {
            label: "Baked Chicken Wings",
            image: "https://www.edamam.com/web-img/4d6/4d62175889a964c25c2a4d9aac44b264.jpg"
        }
    ];

    return(
        <div className='home'>
            <h3>WELCOME TO NUTRITIOUS RECIPES</h3>
            <Carousel style={{ 
                minHeight: '25vh',
                maxWidth: '75vh'
                }} className='carousel-container'>
                {imagesCarousel.map((data, i) =>{
                    return(
                        <Carousel.Item key={i}>
                            <img className='carousel-img'
                            src={data.image}
                            alt={data.label}
                            style={{
                                width:'75%',
                            }}
                            />
                            <Carousel.Caption>
                            <p className='caption'>{data.label}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}