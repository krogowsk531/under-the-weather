import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import WeatherCard from './WeatherCard.js'

describe('WeatherCard', () => {
  it('should render a weather card', () => {
    render(<WeatherCard
              locationName="DENVER"
              weatherDescription="FEW CLOUDS"
              currentTemp={58}
            />)
    expect(screen.getByText('DENVER')).toBeInTheDocument()
    expect(screen.getByText('FEW CLOUDS')).toBeInTheDocument()
  })
})

  //locationName, weatherDescription, currentTemp
