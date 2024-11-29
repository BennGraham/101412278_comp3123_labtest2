import React, { useState } from "react";
import InfoCard from "./InfoCard";
import InfoItem from "./InfoItem";
import FloatingButton from "./FloatingButton";

export default function WeatherDashboard({ weatherData }) {
  const [showDetails, setShowDetails] = useState(false);

  const MainCards = () => (
    <>
      <InfoCard title="Current Weather">
        <div className="d-flex align-items-center justify-content-between">
          <div className="w-100 text-shadow">
            <div
              className="fw-bolder"
              style={{
                fontSize: "3.5rem",
              }}
            >
              {Math.round(weatherData.main.temp)}°C
            </div>
            <h3>{weatherData.weather[0].main}</h3>
            <p>{weatherData.weather[0].description}</p>
            <InfoItem icon="fas fa-temperature-high">
              Feels like: {Math.round(weatherData.main.feels_like)}°C
            </InfoItem>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            alt="displayed weather icon"
            className="mw-100 glowing floating"
            width="120"
            height="120"
          />
        </div>
      </InfoCard>

      <InfoCard title="Quick Details">
        <InfoItem icon="fas fa-wind">
          Wind: {weatherData.wind.speed} m/s
        </InfoItem>
        <InfoItem icon="fas fa-tint">
          Humidity: {weatherData.main.humidity}%
        </InfoItem>
        <InfoItem icon="fas fa-compress-arrows-alt">
          Pressure: {weatherData.main.pressure} hPa
        </InfoItem>
      </InfoCard>

      <InfoCard title="Location">
        <InfoItem icon="fas fa-map-marker-alt">
          {weatherData.name}, {weatherData.sys.country}
        </InfoItem>
        <InfoItem icon="fas fa-compass">
          {weatherData.coord.lat}°N, {weatherData.coord.lon}°E
        </InfoItem>
      </InfoCard>
    </>
  );

  const AdditionalCards = () => (
    <div className={`row g-4 mt-1 ${showDetails ? "" : "hidden"}`}>
      <InfoCard title="Sun Schedule">
        <InfoItem icon="fas fa-sunrise">
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
        </InfoItem>
        <InfoItem icon="fas fa-sunset">
          Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
        </InfoItem>
      </InfoCard>

      <InfoCard title="Temperature Details">
        <InfoItem icon="fas fa-temperature-low">
          Min: {Math.round(weatherData.main.temp_min)}°C
        </InfoItem>
        <InfoItem icon="fas fa-temperature-high">
          Max: {Math.round(weatherData.main.temp_max)}°C
        </InfoItem>
      </InfoCard>

      <InfoCard title="Additional Metrics">
        <InfoItem icon="fas fa-eye">
          Visibility: {(weatherData.visibility / 1000).toFixed(1)} km
        </InfoItem>
        <InfoItem icon="fas fa-cloud">
          Cloudiness: {weatherData.clouds.all}%
        </InfoItem>
        {weatherData.wind.gust && (
          <InfoItem icon="fas fa-wind">
            Wind Gusts: {weatherData.wind.gust} m/s
          </InfoItem>
        )}
      </InfoCard>
    </div>
  );

  return (
    <div className="container">
      <div className="row g-4">
        <MainCards />
      </div>
      {showDetails && <AdditionalCards />}
      <div className="text-center mt-4">
        <FloatingButton
          onClick={() => setShowDetails(!showDetails)}
          detailsHidden={showDetails}
        />
      </div>
    </div>
  );
}
