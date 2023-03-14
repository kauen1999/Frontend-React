import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCards from "../../components/locationcards/locationcards";
import SectionWrapper from "../../shared/section-wrapper"

const Locations = () => {

    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState({});
    const url = "https://rickandmortyapi.com/api/location";

  const fetchLocations = (url) => { axios
      .get(url)
      .then((data) => {
        setLocations(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {fetchLocations(info.next);};
  const handlePreviousPage = () => {fetchLocations(info.prev);};

  useEffect(() => {fetchLocations(url);}, []);

  return (
    <>
      <SectionWrapper  title="Locations"></SectionWrapper>
        <div className="container py-2">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (<li className="page-item"><button className="page-link"  onClick={handlePreviousPage}>Previous</button></li>) : null}
            {info.next ? (<li className="page-item"><button className="page-link"  onClick={handleNextPage}>Next</button></li>) : null}
          </ul>
        </nav>
      </div>

      <LocationCards locations={locations} />

      <div className="container py-2">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (<li className="page-item"><button className="page-link" onClick={handlePreviousPage}>Previous</button></li>) : null}
            {info.next ? (<li className="page-item"><button className="page-link" onClick={handleNextPage}>Next</button></li>) : null}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Locations;
