import React, { Component } from 'react'
import './SearchBar.css';
import PropTypes from 'prop-types';



class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
    }
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
      <form className='location-form'>
        <label className='location-label' >Location: </label>
        <input
          id="location-input"
          type="search"
          name="search"
          placeholder='City Name'
        />
        <button className='button' type="submit" onClick={this.searchWeather}>Get Weather!</button>
      </form>
    )
  }
}

export default SearchBar;

SearchBar.propTypes = {
  updateAppLocation: PropTypes.func.isRequired,
}
