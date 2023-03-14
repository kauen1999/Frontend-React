import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(response => setEpisodes(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="EpisodeList-container">
      {episodes.map(episode => (
        <Card key={episode.id} style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{episode.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{episode.episode}</Card.Subtitle>
            <Card.Text>{episode.air_date}</Card.Text>
            <Link to={`/episodes/${episode.id}`}>Ver detalhes</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default EpisodeList;
