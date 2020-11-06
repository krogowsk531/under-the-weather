import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { getLocationWeather } from '../apiFetch.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherForecast = {},
      location = ''
    }
  }

  componentDidMount = async () => {
    await getLocationWeather(this.state.location)
    .then(data => this.setState({weatherForecast: data}))
    .catch(error => console.log("NOT FETCHING DATA"))
  }
}

export default App;
