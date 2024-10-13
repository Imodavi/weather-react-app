import React, { useState } from 'react';

const WeatherSearch = ({ onSearch }) => {
  const [locationInput, setLocationInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (locationInput.trim() !== '') {
      onSearch(locationInput);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={locationInput}
        onChange={(e) => setLocationInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default WeatherSearch;
