import React, { useEffect, useState } from "react";
import axios from "axios";
import CharactersCards from "../../components/characterscards/charactercard";
import SectionWrapper from "../../shared/section-wrapper"

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => { axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {fetchCharacters(info.next);};
  const handlePreviousPage = () => {fetchCharacters(info.prev);};

  useEffect(() => {fetchCharacters(url);}, []);

  return (
    <>
      <SectionWrapper  title="Characters"></SectionWrapper>
        <div className="container py-2">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (<li className="page-item"><button className="page-link"  onClick={handlePreviousPage}>Previous</button></li>) : null}
            {info.next ? (<li className="page-item"><button className="page-link"  onClick={handleNextPage}>Next</button></li>) : null}
          </ul>
        </nav>
      </div>

      <CharactersCards characters={characters} />

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

export default Characters
