import React, { Component } from 'react'
import { getLocationWeather } from '../apiFetch.js'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
    }
    console.log('props', props)
  }


  searchWeather = (event) => {
    event.preventDefault()
    console.log('value', document.getElementById('location-input').value)
    this.setState({location: document.getElementById('location-input').value })
    console.log('change', this.state.location)
    this.props.updateAppLocation(document.getElementById('location-input').value);

  }

  render() {
    return (
      <form>
        <label>Location: </label>
        <input
          id="location-input"
          type="search"
          name="search"
        />
        <button type="submit" onClick={this.searchWeather}>Get Weather!</button>
      </form>
    )
  }
}

export default SearchBar;
