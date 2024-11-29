// Benn Graham = 101412278
// COMP3123
// Lab Test 2

import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDashboard from "./components/WeatherDashboard";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Toronto");

  const API_KEY = "40332e9667da45216701f2a8805ffad8";

  // save this for 5 day forecast if I have time
  // forecast api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}&units=metric

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <div className="container py-5">
      <div className="dashboard">
        <h1 className="text-center mb-4">Weather Dashboard</h1>

        {loading && (
          <div className="text-center">
            <div className="spinner-border text-primary" />
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {weatherData && !loading && (
          <>
            <Search onSearch={handleSearch} />
            <h2 className="text-center mb-4">
              Weather in {weatherData.name}, {weatherData.sys.country}
            </h2>
            <WeatherDashboard weatherData={weatherData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
