import './App.css';
import React, { Component } from 'react'
import { getLocationWeather } from '../apiFetch.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherForecast: {},
      location: ''
    }
  }

  componentDidMount = async () => {
    await getLocationWeather(this.state.location)
    .then(data => this.setState({weatherForecast: data}))
    .catch(error => console.log("NOT FETCHING DATA"))
  }

  render() {
    return (
      <div className='App'>
        <h1>Under the Weather</h1>
      </div>
    )
  }
}

export default App;
