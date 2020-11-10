import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import Weather from './Weather.js'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'


describe('Weather', () => {

  it('should go to the comfort page when keep me comfortable is clicked', () => {
    const fakeHistory = createMemoryHistory()
    const mockWeatherObj = {name: 'Phoenix', weather: [{description: 'sunny'}], main: {temp: 70}}
    render(<Router history={fakeHistory}>
              <Weather weatherForecast={mockWeatherObj} />
          </Router>
        );

    userEvent.click(screen.getByRole('button', {name: 'Keep Me Comfortable!'}))
    expect(fakeHistory.entries[1].pathname).toEqual('/comfort')
  })

  it('should render a city, condition and temperature', () => {
    const mockWeatherObj = {name: 'Phoenix', weather: [{description: 'sunny'}], main: {temp: 70}}
    render(<Weather weatherForecast={mockWeatherObj} />)

    expect(screen.getByText('PHOENIX')).toBeInTheDocument();
    expect(screen.getByText('SUNNY')).toBeInTheDocument();
  })
})
