import React, { useState, useEffect } from 'react';
import axios from 'axios';


const EpisodeList = ({ episodeList, episodeUrl, handleEpisodeClick }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = async () => {
      const episodeData = await Promise.all(
        episodeList.map(async (episodeUrl) => {
          const response = await axios.get(episodeUrl);
          return response.data;
        })
      );
      setEpisodes(episodeData);
    };
    getEpisodes();
  }, [episodeList]);

  if (!episodes) {
    return <div>Loading...</div>;
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
        {episodes.map((episode) => (
          <tr key={episode.id}>
            <td>
              {episodeUrl === episode.url ? (
                <strong>{episode.name}</strong>
              ) : (
                <button type="button" onClick={() => handleEpisodeClick(episode.id)}>
                  {episode.name}
                </button>
              )}
            </td>
            <td>{episode.episode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EpisodeList;
