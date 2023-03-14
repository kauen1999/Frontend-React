import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './card.css'
import { Link } from 'react-router-dom';

const CharactersCards = ({characters = [], episodeName}) => {
    return(
        <div className="container" style={{}}>
            <div className="row" >
                {characters.map((item, index) => (
                <div key={index} className="col py-2" style={{flex:'0'}}>
                    <Card style={{ width: '18em'}}>
                    <Card.Img variant="top" src={item.image} alt="character" />
                    <Card.Body>
                        <Card.Title >
                            {item.name}
                        </Card.Title>
                    
                            <Badge bg={item.status === 'Alive' ? 'success' : item.status === 'Dead' ? 'danger' : 'secondary'} className='title-margin' >Status: {item.status}</Badge>{' '}
                            <Badge bg="primary" className='title-margin'>Species: {item.species}</Badge>{' '}
                            <Badge bg="primary" className='title-margin'>Location: {item.location.name}</Badge>{' '}
                            <Card.Body>
                                <Link to={`/characters/${item.id}`}>
                                    <Button variant="outline-primary">Mais Informações</Button>
                                </Link>
                            </Card.Body>
                    </Card.Body>
                    </Card>
                </div>
                    ))}
            </div>
        </div>
    )
}

export default CharactersCards;
