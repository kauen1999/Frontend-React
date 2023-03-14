import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './CharacterDetails.css';
import { Link } from 'react-router-dom';


const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
        return response.data.episode;
      })
      .then((episodesUrl) => {
        return axios.all(episodesUrl.map((url) => axios.get(url)));
      })
      .then((responses) => setEpisodes(responses.map((response) => response.data)))
      .catch((error) => console.log(error));
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CharacterDetails-container" style={{marginTop: "50px"}}>
      <div className="row">
        <div className="col-sm-4">
          <img src={character.image} alt={character.name} className="img-fluid" />
        </div>
        <div className="col-sm-8">
          <h1>{character.name}</h1>
          <ul>
            <li>
              <span className="info-label">Status: </span>
              {character.status}
            </li>
            <li>
              <span className="info-label">Species: </span>
              {character.species}
            </li>
            <li>
              <span className="info-label">Gender: </span>
              {character.gender}
            </li>
            <li>
              <span className="info-label">Origin: </span>
              {character.origin.name}
            </li>
            <li>
              <span className="info-label">Location: </span>
              {character.location.name}
            </li>
          </ul>
        </div>
      </div>
      <h2 style={{ marginTop: '20px' }}>Episodes</h2>
      <div className="episode-list">
        {episodes.map((episode) => (
          <div key={episode.id} className="episode-item">
            <h3>{episode.name}</h3>
            <p>{episode.episode}</p>
            <Link to={`/episodes/${episode.id}`} target="_blank">
              <Button variant="outline-dark">Detalhes do Episodio</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterDetails;
