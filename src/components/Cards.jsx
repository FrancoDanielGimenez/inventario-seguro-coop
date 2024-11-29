import '../styles/Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () =>{
    return(
        <>
        <div>
          <Card className='conteinerCards'>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="primary" className='btnCards'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        </>
    )
}

export default Cards;