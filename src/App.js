import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=40332e9667da45216701f2a8805ffad8&units=metric"
        );
        console.log(response.data);
        setWeatherData(response.data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!weatherData) return <div>Error loading weather data</div>;

  return (
    <div>
      <h1>
        City: {weatherData.name}, {weatherData.sys.country}
      </h1>

      <div>
        <div>
          <h2>Coordinates</h2>
          <p>Longitude: {weatherData.coord.lon}</p>
          <p>Latitude: {weatherData.coord.lat}</p>
        </div>

        <div>
          <h2>Weather</h2>
          <p>Condition: {weatherData.weather[0].main}</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Weather ID: {weatherData.weather[0].id}</p>
          <p>Icon: {weatherData.weather[0].icon}</p>
        </div>

        <div>
          <h2>Main</h2>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Feels Like: {weatherData.main.feels_like}</p>
          <p>Min Temperature: {weatherData.main.temp_min}</p>
          <p>Max Temperature: {weatherData.main.temp_max}</p>
          <p>Pressure: {weatherData.main.pressure}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Sea Level: {weatherData.main.sea_level}</p>
          <p>Ground Level: {weatherData.main.grnd_level}</p>
        </div>

        <div>
          <h2>Wind</h2>
          <p>Speed: {weatherData.wind.speed}</p>
          <p>Direction: {weatherData.wind.deg}</p>
          <p>Gust: {weatherData.wind.gust}</p>
        </div>

        <div>
          <h2>Misc</h2>
          <p>Visibility: {weatherData.visibility}</p>
          <p>Cloudiness: {weatherData.clouds.all}</p>
          <p>Timezone: {weatherData.timezone}</p>
        </div>

        <div>
          <h2>Sun rise/set</h2>
          <p>
            Sunrise:
            {new Date(weatherData.sys.sunrise).toLocaleTimeString()}
          </p>
          <p>
            Sunset:
            {new Date(weatherData.sys.sunset).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
