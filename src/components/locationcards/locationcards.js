import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const LocationCards = ({ locations = [] }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {locations.map((location, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 py-2">
            <Card>
              <Card.Body>
                <Card.Title className="text-center fs-4">{location.name}</Card.Title>
                <Card.Subtitle className="text-muted text-center">{location.type}</Card.Subtitle>
                <Card.Text className="text-center">{location.dimension}</Card.Text>
                <div className="d-flex justify-content-center">
                  <Link to={`/locations/${location.id}`}>
                    <Card.Link>Mais Informações</Card.Link>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCards;
