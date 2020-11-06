import React from 'react'

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
