import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard.js'
import { useHistory } from 'react-router-dom'

const Weather = ( {weatherForecast} ) => {
  let history = useHistory();

  const redirect = () => {
    history.push('/comfort')
  }

  if (!weatherForecast.main) {
    return (
      <section></section>
    )
  }

  return (
    <section className="container">

      <WeatherCard
        locationName={weatherForecast.name}
        weatherDescription={weatherForecast.weather[0].description}
        currentTemp={weatherForecast.main.temp}
      />
      <button onClick={redirect}>Keep Me Comfortable!</button>
    </section>
  )
}

export default Weather;
