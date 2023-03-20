import React from 'react';
import CustomCard from '../../shared/customcard/customcard';

const LocationCards = ({ locations = [] }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {locations.map((location, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 py-2">
            <CustomCard
              title={location.name}
              subtitle1={location.type}
              text={location.dimension}
              linkTo={`/locations/${location.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCards;
