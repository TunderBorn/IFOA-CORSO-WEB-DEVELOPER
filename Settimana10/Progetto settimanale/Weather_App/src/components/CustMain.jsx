import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Search_Icon from "../Images/Icons/search.png";
import Clear_Icon from "../Images/Icons/clear.png";
import Cloud_Icon from "../Images/Icons/cloud.png";
import Drizzle_Icon from "../Images/Icons/drizzle.png";
import Snow_Icon from "../Images/Icons/snow.png";
import Rain_Icon from "../Images/Icons/Rain.png";
import Wind_Icon from "../Images/Icons/wind.png";
import Humidity_Icon from "../Images/Icons/humidity.png";
import moment from 'moment';

function Main() {
  let api_key = "a7c18d8f0c760dc2d008770529ee33da";

  const [wicon, setWicon] = useState(Cloud_Icon);
  const [forecastData, setForecastData] = useState([]);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${element[0].value}&units=Metric&APPID=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidityPercent");
    const wind = document.getElementsByClassName("windRate");
    const temperature = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("weatherLocation");

    humidity[0].innerHTML = data.list[0].main.humidity + "%";
    wind[0].innerHTML = data.list[0].wind.speed + "km/h";
    temperature[0].innerHTML = data.list[0].main.temp + "°C";
    location[0].innerHTML = data.city.name;

    setForecastData(data.list.slice(1, 8));

    if (data.list[0].weather[0].main === "Clear") {
      setWicon(Clear_Icon);
    } else if (data.list[0].weather[0].main === "Clouds") {
      setWicon(Cloud_Icon);
    } else if (data.list[0].weather[0].main === "Snow") {
      setWicon(Snow_Icon);
    } else if (data.list[0].weather[0].main === "Drizzle") {
      setWicon(Drizzle_Icon);
    } else if (data.list[0].weather[0].main === "Rain") {
      setWicon(Rain_Icon);
    }
  };


  return (
    <>
      <input
        type="text"
        className="cityInput"
        placeholder="Inserisci la città"
      />
      <img
        src={Search_Icon}
        alt="Search Icon"
        className="Search-Icon px-2"
        onClick={() => {
          search();
        }}
      ></img>

      <div>
        <h1 className="weatherLocation">Monaco</h1>
        <p>{moment().format("dddd")}, <br />
          {moment().format("LL")}</p>
      </div>
      <Container>
        <Row className="d-flex align-items-center justify-content-center my-2">
          <Col xs={6}>
            <div>
              <img src={wicon} alt=""></img>
            </div>
          </Col>
          <Col xs={6}>
            <p className="temp">47°C</p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center my-4">
          <Col xs={6}>
            <img src={Humidity_Icon} alt=""></img>
            <p className="humidityPercent">34%</p>
          </Col>
          <Col xs={6}>
            <img src={Wind_Icon} alt=""></img>
            <p className="windRate">43.56 km/h</p>
          </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center my-3'>
          <div className='my-2 border-bottom'>Previsioni della Settimana</div>
          {forecastData.map((forecastDay, index) => (
            <Col key={index} xs={3}>
              <img className="next" src={getForecastIcon(forecastDay.weather[0].main)} alt=""></img>
              <p>{forecastDay.main.temp}°C</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

// Funzione di supporto per ottenere l'icona in base alle condizioni meteorologiche di previsione
const getForecastIcon = (weatherMain) => {
  switch (weatherMain) {
    case "Clear":
      return Clear_Icon;
    case "Clouds":
      return Cloud_Icon;
    case "Snow":
      return Snow_Icon;
    case "Drizzle":
      return Drizzle_Icon;
    case "Rain":
      return Rain_Icon;
    default:
      return Cloud_Icon;
  }
};

export default Main;
