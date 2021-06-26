import { Carousel } from "react-bootstrap";

export default function Home({ sampleData }) {
    return(
        <div className='home'>
            <h3>WELCOME TO NUTRITIOUS RECIPES</h3>
            <Carousel style={{ 
                minHeight: '25vh',
                maxWidth: '75vh'
                }} className='carousel-container'>
                {sampleData.map((data, i) =>{
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