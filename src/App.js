
import React from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import './App.css';
import FutureWeather from './components/FutureWeather/FutureWeather';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <CurrentWeather />
      <FutureWeather />
      <Footer />
      
      {/* Add other components here */}
    </div>
  );
}

export default App;
