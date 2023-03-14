import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CharactersCards from '../../components/characterscards/charactercard';

const LocationDetails = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(response => {
        setLocation(response.data);
        return response.data.residents;
      })
      .then(residentsUrl => {
        return axios.all(residentsUrl.map(url => axios.get(url)));
      })
      .then(responses => setResidents(responses.map(response => response.data)))
      .catch(error => console.log(error));
  }, [id]);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>{location.name}</h1>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <h2>Habitantes</h2>
      <CharactersCards characters={residents} />
    </div>
  );
};

export default LocationDetails;
