import { Carousel } from "react-bootstrap";

export default function Home() {

    const imagesCarousel = [
        {
            label: "Roast sirloin of beef",
            image: "https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg"
        },
        {
            label: "Beef Cheek Confit With Caramelized Turnips",
            image: "https://www.edamam.com/web-img/dd6/dd61ac5ef81bd3ca2735ad90e0adc939.jpg"
        },
        {
            label: "Fennel- And Coriander-Spiced Salmon Fillets",
            image: "https://www.edamam.com/web-img/be7/be7cc1a73ffb7e37f8a8d0afb1dc4492.jpg"
        },
        {
            label: "Marinated Mozzarella",
            image: "https://www.edamam.com/web-img/765/765e1d73f81854d3b106f07a9cc8844a.jpg"
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
            label: "Croissant Breakfast Sandwich",
            image: "https://www.edamam.com/web-img/fb5/fb5099b63ddfdcaa581d261847ee3c1b.jpg",
        },
        {
            label: "Baked Chicken Wings",
            image: "https://www.edamam.com/web-img/4d6/4d62175889a964c25c2a4d9aac44b264.jpg"
        }
    ];

    return(
        <div className='home'>
            <h3>WELCOME TO COOK ASSISTANT</h3>
            <div className='fun-animation'>
                <h4>Let's get cooking'</h4>
            </div>
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
                                width:'100%',
                                height: '45vh'
                            }}
                            />
                            <Carousel.Caption>
                            <p className='caption'>{data.label}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <div className='stretch'></div>
        </div>
    )
}