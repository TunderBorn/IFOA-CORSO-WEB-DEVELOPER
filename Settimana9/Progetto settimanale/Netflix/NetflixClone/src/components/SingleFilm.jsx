import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";

function SingleImg(prop) {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          prop.url
        );
        const data = await response.json();
        setFilmData(data.Search);
      } catch (error) {
        console.error("Errore di chiamata", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {filmData && 
      filmData.slice(0, 6).map((filmData) => (
        <Col xl={2}  key={filmData.imdbID}>
          <img
            src={filmData.Poster}
            alt={filmData.Title}
            className="gallery"/>
        </Col>
      ))}
    </>
  );
}

export default SingleImg;