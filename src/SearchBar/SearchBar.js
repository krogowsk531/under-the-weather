import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
    }
  }

  render() {
    return (
      <label>Location: </label>
      <input
        id="location-input"
        type="text"
        name="location"
        value={}
        onChange={}
      />
      <button type="submit" onClick={}>Get Weather!</button>
    )
  }
}

export default SearchBar;
