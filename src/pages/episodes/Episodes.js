import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodesCards from "../../components/episodescards/episodecards";
import SectionWrapper from "../../shared/section-wrapper"

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});
    const url = "https://rickandmortyapi.com/api/episode";

  const fetchEpisodes = (url) => { axios
      .get(url)
      .then((data) => {
        setEpisodes(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {fetchEpisodes(info.next);};
  const handlePreviousPage = () => {fetchEpisodes(info.prev);};

  useEffect(() => {fetchEpisodes(url);}, []);

  return (
    <>
      <SectionWrapper  title="Episodes"></SectionWrapper>
        <div className="container py-2">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (<li className="page-item"><button className="page-link"  onClick={handlePreviousPage}>Previous</button></li>) : null}
            {info.next ? (<li className="page-item"><button className="page-link"  onClick={handleNextPage}>Next</button></li>) : null}
          </ul>
        </nav>
      </div>

      <EpisodesCards episodes={episodes} />

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

export default Episodes
