import React from "react";
import "./weatherBox.css";
import {
  FaCloudShowersHeavy,
  FaCloud,
  FaSun,
  FaRegSnowflake,
  FaQuestion,
} from "react-icons/fa";

export default function WeatherDescription(props) {
  return (
    <div className="weather-box">
      <div className="location">
        {props.weatherCityName}, {props.weatherCountry}
      </div>
      <div className="date">{props.weatherDate}</div>
      <div>
        <div className="weatherIconBox">
          <div className="weatherIcon">
            {props.weather == "Clouds" ? (
              <FaCloud />
            ) : props.weather == "Haze" ? (
              <FaCloud />
            ) : props.weather == "Rain" ? (
              <FaCloudShowersHeavy />
            ) : props.weather == "Clear" ? (
              <FaSun />
            ) : props.weather == "Snow" ? (
              <FaRegSnowflake />
            ) : (
              <FaQuestion />
            )}
            <div className="weather">{props.weather}</div>
          </div>
        </div>

        <div className="temp">{props.weatherTemp}°f</div>
      </div>
    </div>
  );
}
