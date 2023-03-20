import React from 'react';
import CustomCard from '../../shared/customcard/customcard';

const EpisodesCards = ({ episodes = [] }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {episodes.map((episode, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 py-2">
            <CustomCard
              title={episode.name}
              subtitle1={episode.episode}
              text={episode.air_date}
              linkTo={`/episodes/${episode.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesCards;
