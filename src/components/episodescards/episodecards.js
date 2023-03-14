import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const EpisodesCards = ({ episodes = [] }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {episodes.map((episode, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 py-2">
            <Card>
              <Card.Body>
                <Card.Title className="text-center fs-4">{episode.name}</Card.Title>
                <Card.Subtitle className="text-muted text-center">{episode.episode}</Card.Subtitle>
                <Card.Text className="text-center">{episode.air_date}</Card.Text>
                <div className="d-flex justify-content-center">
                  <Link to={`/episodes/${episode.id}`} target="_blank">
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

export default EpisodesCards;
