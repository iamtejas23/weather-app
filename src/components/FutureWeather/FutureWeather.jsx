import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherCards.css'; // Import the CSS file

const WeatherCard = ({ city, latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: `${latitude},${longitude}` },
        headers: {
          'X-RapidAPI-Key': '12e8d1a8d6mshbb855d36f03ce81p19fc39jsn0483fa7a2d5d',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <div className="weather-card usniq-weather-card">
      {weatherData && (
        <>
          <h2>{city}</h2>
          <img
            className="usniq-weather-icon"
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
          <p className="usniq-temperature">{weatherData.current.temp_c}°C</p>
          <p className="usniq-condition">{weatherData.current.condition.text}</p>
            <p className="usniq-wind">Wind: {weatherData.current.wind_kph} km/h</p>
            <p className="usniq-humidity">Humidity: {weatherData.current.humidity}%</p>
            <p className="usniq-visibility">Visibility: {weatherData.current.vis_km} km</p>
            
            
          
        </>
      )}
    </div>
  );
};

const WeatherApp = () => {
  return (
    <div className="cities-app usniq-cities-app">
      <WeatherCard city="London" latitude="51.51" longitude="-0.13" />
      <WeatherCard city="New York" latitude="40.7128" longitude="-74.006" />
      <WeatherCard city="Tokyo" latitude="35.6895" longitude="139.6917" />
      <WeatherCard city="India" latitude="-33.8688" longitude="151.2093" />
    </div>

    
  );
};

export default WeatherApp;
