
import React from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import './App.css';
import FutureWeather from './components/FutureWeather/FutureWeather';



function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <CurrentWeather />
      <FutureWeather />
      
      
      {/* Add other components here */}
    </div>
  );
}

export default App;
