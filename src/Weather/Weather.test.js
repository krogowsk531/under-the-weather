import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import Weather from './Weather.js'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'



describe('Weather', () => {
  // it('when keep my comfortable is clicked the URL should change', async () => {
  //   const fakeJest = jest.fn();
  //   jest.mock('react-router-dom', () => ({
  //     useHistory: () => ({
  //       push: fakeJest,
  //     }), }));
  //   const mockWeatherObj = {name: 'Phoenix', weather: [{description: 'sunny'}], main: {temp: 70}}
  //   render (<Weather weatherForecast={mockWeatherObj}/>)
  //
  //   expect(screen.getByRole('button', {name: 'Keep Me Comfortable!'})).toBeInTheDocument();
  //   userEvent.click(screen.getByText('Keep Me Comfortable!'))
  //   expect(fakeJest).toHaveBeenCalledTimes(1)
  //
  //
  //   // await waitForElement(() => getByText(/comfort/));
  // })

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
