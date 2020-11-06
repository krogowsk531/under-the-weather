import React, { Component } from 'react'
import { getLocationWeather } from '../apiFetch.js'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
    }
  }

  updateValue = (event) => {
    this.setState({location: event.target.value })
  }

  searchWeather = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form>
        <label>Location: </label>
        <input
          id="location-input"
          type="search"
          name="search"
          value={this.state.search}
          onChange={this.updateValue}
        />
        <button type="submit" onClick={this.searchWeather}>Get Weather!</button>
      </form>
    )
  }
}

export default SearchBar;
