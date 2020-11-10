import React, { Component } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard.js'
import { useHistory } from 'react-router-dom'
import './Weather.css';
import PropTypes from 'prop-types';


const Weather = ( {weatherForecast} ) => {
  let history = useHistory();

  if (!weatherForecast.main) {
    return (
      <section></section>
    )
  }

  const redirect = () => {
    history.push('/comfort')
  }

  return (
    <section className="container">
      <WeatherCard
        locationName={weatherForecast.name}
        weatherDescription={weatherForecast.weather[0].description}
        currentTemp={weatherForecast.main.temp}
      />
      <button className='button' id='comfort-button' onClick={redirect}>Keep Me Comfortable!</button>
    </section>
  )
}

export default Weather;

Weather.propTypes = {
  weatherForecast: PropTypes.object,
}
