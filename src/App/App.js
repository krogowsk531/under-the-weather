import './App.css';
import React, { Component } from 'react'
import { getLocationWeather } from '../apiFetch.js'
import Weather from '../Weather/Weather.js'
import SearchBar from '../SearchBar/SearchBar.js'
import Comfort from '../Comfort/Comfort.js'
import { Route } from 'react-router-dom'
import PersonalTemp from '../PersonalTemp/PersonalTemp.js'
import Table from '../Table/Table.js'




class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherForecast: {},
      location: '',
    }
  }

  updateAppLocation = (location) => {
    console.log("LOC", location)
    getLocationWeather(location)
    .then(data => {console.log(data);this.setState({weatherForecast: data})})
    .catch(error => console.log("NOT FETCHING HERE"))

  }


  // componentDidMount = async () => {
  //   // console.log('here', this.state.location)
  //   // await getLocationWeather(this.state.location)
  //   // .then(data => {console.log(data);this.setState({weatherForecast: data})})
  //   // .catch(error => console.log("NOT FETCHING DATA"))
  //   this.updateAppLocation(this.state.location)
  // }


  render() {
    return (
      <div className='App'>
        <Route exact path='/'>
          <h1>Under the Weather</h1>
          <SearchBar updateAppLocation={this.updateAppLocation}/>
          <Weather weatherForecast={this.state.weatherForecast}/>
        </Route>
        <Route exact path='/comfort'>
          <PersonalTemp />
          <Table />
          <Comfort />
        </Route>
      </div>
    )
  }
}

export default App;
