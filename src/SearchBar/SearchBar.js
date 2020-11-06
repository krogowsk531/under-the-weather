import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
    }
  }

  updateValue = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  getWeather = (event) => {
    event.preventDefault()
    const city = document.getElementById('location-input').value
  }

  render() {
    return (
      <form>
        <label>Location: </label>
        <input
          id="location-input"
          type="text"
          name="location"
          value={this.state.location}
          onChange={this.updateValue}
        />
        <button type="submit" onClick={this.getWeather}>Get Weather!</button>
      </form>
    )
  }
}

export default SearchBar;
