
import { Link } from 'react-router-dom'; 
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export default function Recipes({ sampleData }) {
    return(
        <div>
            <CardColumns style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            textAlign: 'center', 
                            position: 'center'
                            }}
                            className='card-container'>
            {sampleData.map((data, i) =>{
                return(
                    <Link to={`/recipe/${data.label}`}key={i}>
                        <Card style={{ 
                            width: '15rem',
                            padding: '20px',
                            margin: '20px 40px 20px 20px'
                            }} className="card-items">
                            <Card.Img src={data.image} alt={data.label} />
                            <Card.Title>{data.label}</Card.Title>
                            <Card.Text><p>Click to see more</p></Card.Text>
                        </Card>
                    </Link>
                )
            })}
            </CardColumns>
        </div>
    )
}