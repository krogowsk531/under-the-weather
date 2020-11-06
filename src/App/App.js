import './App.css';
import React, { Component } from 'react'
import { getLocationWeather } from '../apiFetch.js'
import Weather from '../Weather/Weather.js'
import SearchBar from '../SearchBar/SearchBar.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherForecast: {},
      location: 'Denver',
    }
  }

  componentDidMount = async () => {
    console.log('here', this.state.location)
    await getLocationWeather(this.state.location)
    .then(data => {console.log(data);this.setState({weatherForecast: data})})
    .catch(error => console.log("NOT FETCHING DATA"))
  }


  render() {
    return (
      <div className='App'>
        <h1>Under the Weather</h1>
        <SearchBar />
        <Weather weatherForecast={this.state.weatherForecast}/>
        <button>Keep Me Comfortable!</button>
      </div>
    )
  }
}

export default App;
