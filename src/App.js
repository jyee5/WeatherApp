import React, { useState } from "react";
import WeatherDescription from "./weatherDescription";

const weatherAPI = {
  key: "d54621adc1eb92e667891cb536f72f93",
};

export default function App() {
  const buildDate = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  const [cityName, setCityName] = useState("");

  const [weather, setWeather] = useState("");

  const submitWeather = () => {
    if (cityName === "") {
      alert("Enter City Name First");
      setCityName("");
    } else {
      fetchWeather();
    }
  };

  async function fetchWeather() {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherAPI.key}`
    );

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
      console.log(await response);
      let data = await response.json();
      setWeather(data);
      setCityName("");
      console.log(data);
      // handle data
    } else {
      console.log("is catching");
      alert("Invalid City Name... Enter Valid City Name");
      setCityName("");
    }
  }

  function calculateWeatherFaren(temperatureK) {
    return Math.round(((temperatureK - 273.15) * 9) / 5 + 32);
  }

  return (
    <div>
      <div className="top">
        <h1 class="heading">Weather App</h1>
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a city"
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
          />
          <button onClick={submitWeather}>Submit</button>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <WeatherDescription
                weatherTemp={calculateWeatherFaren(weather.main.temp)}
                weather={weather.weather[0].main}
                weatherDate={buildDate(new Date())}
                weatherCityName={weather.name}
                weatherCountry={weather.sys.country}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="current-weather"></div>
    </div>
  );
}
