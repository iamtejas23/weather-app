import React, { useState } from 'react';
import axios from 'axios';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
          q: city,
          days: '3'
        },
        headers: {
          'X-RapidAPI-Key': '12e8d1a8d6mshbb855d36f03ce81p19fc39jsn0483fa7a2d5d',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-app">
      <h2>Current Weather</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={fetchData}>Search</button>
      </div>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {weather && (
        <div>
          <div className="weather-info">
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <p>Temperature: {weather.current.temp_c}°C</p>
            <p>Condition: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="weather icon" />
            <p>Wind: {weather.current.wind_kph} km/h</p>
            <p>Humidity: {weather.current.humidity}%</p>
            <p>Visibility: {weather.current.vis_km} km</p>
          </div>
          <div className="forecasting">
            <hr className='hr' />
            <h2>Next 3 days</h2>
          <div className="forecast">
            
            {weather.forecast.forecastday.map(day => (
              <div key={day.date}>
                <h3>{day.date}</h3>
                <p>Condition: {day.day.condition.text}</p>
                <img src={day.day.condition.icon} alt="forecast icon" />
                <p>Max Temperature: {day.day.maxtemp_c}°C</p>
                <p>Min Temperature: {day.day.mintemp_c}°C</p>
                <p>Chance of Rain: {day.day.daily_chance_of_rain}%</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;