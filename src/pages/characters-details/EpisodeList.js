import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const EpisodeList = ({ episodeList, episodeUrl, handleEpisodeClick }) => {
  const [episodesData, setEpisodesData] = useState([]);
  
  useEffect(() => {
    const fetchEpisodesData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        setEpisodesData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEpisodesData();
  }, []);
  
  const episodes = useMemo(() => {
    return episodeList.map((episodeUrl) => {
      const episode = episodesData.find((e) => e.url === episodeUrl);
      return episode ? episode : null;
    });
  }, [episodeList, episodesData]);

  if (!episodes) {
    return <div>Loading...</div>;
  }

  const episodeElements = [];
  for (let i = 0; i < episodes.length; i++) {
    const episode = episodes[i];
    episodeElements.push(
      <tr key={episode.id}>
        <td>
          {episode.url === episodeUrl ? (
            <strong>{episode.name}</strong>
          ) : (
            <button type="button" onClick={() => handleEpisodeClick(episode.id)}>
              {episode.name}
            </button>
          )}
        </td>
        <td>{episode.episode}</td>
      </tr>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Episode</th>
        </tr>
      </thead>
      <tbody>
        {episodeElements}
      </tbody>
    </table>
  );
};

export default EpisodeList;
