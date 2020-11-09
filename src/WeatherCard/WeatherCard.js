import React from 'react'
import './WeatherCard.css';
import PropTypes from 'prop-types';

const WeatherCard = ( {locationName, weatherDescription, currentTemp} ) => {
  return (
    <section>
      <h2>{locationName.toUpperCase()}</h2>
      <h2>{weatherDescription.toUpperCase()}</h2>
      <h2>{currentTemp}°</h2>
    </section>
  )
}

export default WeatherCard;

WeatherCard.propTypes = {
  currentTemp: PropTypes.number,
  locationName: PropTypes.string,
  weatherDescription: PropTypes.string
}
