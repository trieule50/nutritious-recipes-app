import { Carousel } from "react-bootstrap";
export default function About(){

    const imagesCarousel = [
        {
            label: "Chorizo, caper & rocket pizza",
            image: "https://www.edamam.com/web-img/7fe/7fee72cbf470edc0089493eb663a7a09.jpg"
        },
        {
            label: "Beef Cheek Confit With Caramelized Turnips",
            image: "https://www.edamam.com/web-img/dd6/dd61ac5ef81bd3ca2735ad90e0adc939.jpg"
        },
        {
            label: "Rarebit Pork Chops",
            image: "https://www.edamam.com/web-img/8ea/8eada5e78df7cb6502b1290481388e61.jpg"
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

    return (
        <>
        <h3>ABOUT</h3>
        <div className='about'>
            <div style={{
                margin: 'auto'
            }}>
                <p style={{
                    width: '45rem',
                    padding: '25px 0 0 0', 
                    margin: 'auto',
                    fontSize: '1.35rem',
                    inlineSize: '75%',
                    overflowWrap: 'break-word'
                }}>
                    <p>
                    Having knowledge on nutrition, not only help with maintaining a healthy weight but it also can help reduce the risk of some disease.
                    </p>
                    <p>
                    Cook Assistant is an app that allows anyone to search up recipes based on their dietary needs or their choice in ingredients by uses data from Edamam API. For more information regarding the API, please go to the Edamam website.
                    </p>
                </p>
            </div>
            <div>
                <Carousel style={{ 
                    minHeight: '25vh',
                    maxWidth: '50vh'
                    }} className='carousel-container'>
                    {imagesCarousel.map((data, i) =>{
                        return(
                            <Carousel.Item key={i}>
                                <img className='carousel-img'
                                src={data.image}
                                alt={data.label}
                                style={{
                                    width:'100%',
                                    height: '40vh'
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
            <div className='space'></div>
        </div>
        </>
    )
}