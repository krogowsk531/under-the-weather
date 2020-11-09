import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import Weather from './Weather.js'
import userEvent from '@testing-library/user-event'



describe('Weather', () => {
  it('when keep my comfortable is clicked the URL should change', async () => {
    const fakeJest = jest.fn();
    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: fakeJest,
      }), }));
    const mockWeatherObj = {name: 'Phoenix', weather: [{description: 'sunny'}], main: {temp: 70}}
    render (<Weather weatherForecast={mockWeatherObj}/>)

    expect(screen.getByRole('button', {name: 'Keep Me Comfortable!'})).toBeInTheDocument();
    userEvent.click(screen.getByText('Keep Me Comfortable!'))
    expect(fakeJest).toHaveBeenCalledTimes(1)


    // await waitForElement(() => getByText(/comfort/));
  })
})

  //when keep me comfort is clicked
  //the url has changed
  //test Phoenix, sunny and 70 are in the document in different it block

  // locationName={weatherForecast.name}
  // weatherDescription={weatherForecast.weather[0].description}
  // currentTemp={weatherForecast.main.temp}
