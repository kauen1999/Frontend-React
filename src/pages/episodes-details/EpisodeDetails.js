  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { useParams } from 'react-router-dom';
  import CharactersCards from "../../components/characterscards/charactercard";

  const EpisodeDetails = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState(null);
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(response => {
          setEpisode(response.data)
          return response.data.characters;
        })
        .then(charactersUrl => {
          return axios.all(charactersUrl.map(url => axios.get(url)))
        })
        .then(responses => setCharacters(responses.map(response => response.data)))
        .catch(error => console.log(error));
    }, [id]);
    

    if (!episode) {
      return <div>Loading...</div>;
    }
    
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>{episode.name}</h1>
        <p>{episode.episode}</p>
        <p>{episode.air_date}</p>
        <h2>Personagem Presentes no Episodio</h2>
        <CharactersCards characters={characters} />
      </div>

    );
    
  };

  export default EpisodeDetails;
