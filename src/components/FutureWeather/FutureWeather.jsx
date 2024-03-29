import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherCards.css'; // Import the CSS file

const WeatherCard = ({ city, latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);


  const rapidAPIKey = process.env.REACT_APP_RAPIDAPI_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: `${latitude},${longitude}` },
        headers: {
          'X-RapidAPI-Key': rapidAPIKey,
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
  }, [latitude, longitude, rapidAPIKey]); // Include rapidAPIKey in the dependency array

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
      <WeatherCard city="New Delhi, India" latitude="-33.8688" longitude="151.2093" />
      <WeatherCard city="London" latitude="51.51" longitude="-0.13" />
      <WeatherCard city="New York" latitude="40.7128" longitude="-74.006" />
      <WeatherCard city="Tokyo" latitude="35.6895" longitude="139.6917" />
    </div>

    
  );
};

export default WeatherApp;
