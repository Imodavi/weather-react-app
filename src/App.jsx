import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// Import components
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('Location not found');
    }
    setLoading(false);
  };

  const handleSearch = (locationInput) => {
    setLocation(locationInput);
    fetchWeather();
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      {/* Weather Search Component */}
      <WeatherSearch onSearch={handleSearch} />

      {/* Error Message Component */}
      {error && <ErrorMessage message={error} />}

      {/* Loading Spinner Component */}
      {loading && <LoadingSpinner />}

      {/* Weather Display Component */}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;
