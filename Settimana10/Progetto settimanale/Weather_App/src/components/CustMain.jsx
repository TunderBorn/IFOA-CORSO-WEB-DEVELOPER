import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Clear_Icon from "../Images/Icons/clear.png";
import Cloud_Icon from "../Images/Icons/cloud.png";
import Drizzle_Icon from "../Images/Icons/drizzle.png";
import Snow_Icon from "../Images/Icons/snow.png";
import Rain_Icon from "../Images/Icons/Rain.png";
import Wind_Icon from "../Images/Icons/wind.png";
import Humidity_Icon from "../Images/Icons/humidity.png";

function Main() {
  return (
    <>
      <div>
        <h1>Monaco</h1>
        <p>Data</p>
      </div>
      <Container>
        <Row className='d-flex align-items-center justify-content-center my-2'>
          <Col xs={6}>
            <div>
              <img src={Cloud_Icon} alt=""></img>
            </div>
          </Col>
          <Col xs={6}>
            <p>TEMPERATURA</p>
          </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center my-5'>
            <Col xs={6}>
                <img src={Humidity_Icon} alt=""></img>
                <p>UMIDITA'</p></Col>
            <Col xs={6}>
                <img src={Wind_Icon} alt=""></img>
                <p>VENTO</p></Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center my-3'>
            <Col xs={6}><img className="next" src={Snow_Icon} alt=""></img></Col>
            <Col xs={6}><p>GRADI MAIN WEATHER</p></Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center my-3'>
            <Col xs={6}><img className="next" src={Drizzle_Icon} alt=""></img></Col>
            <Col xs={6}><p>GRADI MAIN WEATHER</p></Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center my-3'>
            <Col xs={6}><img className="next" src={Rain_Icon} alt=""></img></Col>
            <Col xs={6}><p>GRADI MAIN WEATHER</p></Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
