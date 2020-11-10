import App from './App';

import React from 'react'
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'
import { getLocationWeather } from '../apiFetch.js'
jest.mock('../apiFetch.js')


describe('App component', () => {

  it('should render weather info', async () => {
    getLocationWeather.mockResolvedValueOnce(
      {"coord":{"lon":-104.98,"lat":39.74},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":28.26,"feels_like":19.62,"temp_min":28,"temp_max":28.99,"pressure":1011,"humidity":84},"visibility":2364,"wind":{"speed":7.2,"deg":52},"clouds":{"all":88},"dt":1604967818,"sys":{"type":3,"id":2011082,"country":"US","sunrise":1604929101,"sunset":1604965761},"timezone":-25200,"id":5419384,"name":"Denver","cod":200})

      const { getByText } = render(<BrowserRouter><App /></BrowserRouter>)
      const location = await waitFor(() => screen.getByText("DENVER"))
      const description = await waitFor(() => screen.getByText("OVERCAST CLOUDS"))
      const temp = await waitFor(() => screen.getByText("28.26°"))
      //
      expect(location).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(temp).toBeInTheDocument();
  })

  it('should display the right info when the page loads', async () => {
      getLocationWeather.mockResolvedValueOnce(
        {"coord":{"lon":-104.98,"lat":39.74},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":28.26,"feels_like":19.62,"temp_min":28,"temp_max":28.99,"pressure":1011,"humidity":84},"visibility":2364,"wind":{"speed":7.2,"deg":52},"clouds":{"all":88},"dt":1604967818,"sys":{"type":3,"id":2011082,"country":"US","sunrise":1604929101,"sunset":1604965761},"timezone":-25200,"id":5419384,"name":"Denver","cod":200})


      const { getByText} = render(<BrowserRouter><App /></BrowserRouter>)
      const location =  await waitFor(() =>  screen.getByText("DENVER"))
      const description = await waitFor(() => screen.getByText("OVERCAST CLOUDS"))
      const temp = await waitFor(() => screen.getByText("28.26°"))
      const title = screen.getByText('Under the Weather')
      const locationText = screen.getByText('Location:')
      const cityPlaceHolder = screen.getByPlaceholderText('City Name')
      const getWeatherButton = screen.getByRole("button", {name: 'Get Weather!'})
      const keepMeComfortableButton = screen.getByRole("button", {name: 'Keep Me Comfortable!'})

      expect(location).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(temp).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(locationText).toBeInTheDocument();
      expect(cityPlaceHolder).toBeInTheDocument();
      expect(getWeatherButton).toBeInTheDocument();
      expect(keepMeComfortableButton).toBeInTheDocument();
    })






})
