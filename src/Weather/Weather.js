import React, { Component } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard.js'
import { useHistory } from 'react-router-dom'
import './Weather.css';


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


// class Weather extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//
//     }
//     this.redirect = this.redirect.bind(this)
//     // let history = useHistory();
//   }
//
//   redirect = (event) => {
//     this.props.history.push('/comfort')
//   }
//
//
//   render() {
//     if (!this.props.weatherForecast.main) {
//       return (
//         <section></section>
//       )
//     }
//     return (
//       <section className="container">
//
//       <WeatherCard
//       locationName={this.props.weatherForecast.name}
//       weatherDescription={this.props.weatherForecast.weather[0].description}
//       currentTemp={this.props.weatherForecast.main.temp}
//       />
//       <button className='button' onClick={this.redirect}>Keep Me Comfortable!</button>
//       </section>
//     )
//   }
// }
