import Row from "react-bootstrap/Row";
import SingleFilm from "./SingleFilm";
import Titles from "./CustAllTitles";

function Gallery() {
  return (
    <>
   <Row className='gx-1'> 
        <Titles titles='Harry Potter'/>
           <SingleFilm url='https://www.omdbapi.com/?apikey=fccbdbca&s=harry%20potter'/>
        </Row>
        <Row className='gx-1'>
        <Titles titles='Doctor Who'/>
           <SingleFilm url='https://omdbapi.com/?apikey=fccbdbca&s=doctor%20who'/>
        </Row>
        <Row className='gx-1'>
        <Titles titles='Lord of the Rings'/>
           <SingleFilm url='https://www.omdbapi.com/?apikey=fccbdbca&s=lord%20of%20the%20rings'/>
        </Row>
    </>
  )
}
export default Gallery;