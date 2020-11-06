import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard.js'

const Weather = ( {weatherForecast} ) => {
  return (
    <section className="container">
      <WeatherCard
        locationName={weatherForecast.name}
        weatherDescription={weatherForecast.weather[0].description}
        currentTemp={weatherForecast.main.temp}
      />
    </section>
  )
}

export default Weather;
