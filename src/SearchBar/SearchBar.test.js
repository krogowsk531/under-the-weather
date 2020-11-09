import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import SearchBar from './SearchBar.js'
import userEvent from '@testing-library/user-event'


describe('SearchBar', () => {
  it('should have one input field and a button', () => {
    render (<SearchBar updateAppLocation/>)

    expect(screen.getByText('Location:')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Get Weather!'})).toBeInTheDocument();
  })

  it('should invoke searchWeather when button is clicked', () => {
    const fakeSearchWeather = jest.fn();
    render(<SearchBar updateAppLocation/>)

    userEvent.click(screen.getByText('Get Weather!'));
    expect(fakeSearchWeather).toHaveBeenCalledTimes(1)
  })
})

// it('should invoke removeIdea with the card id when button is clicked', () => {
//     const fakeRemoveIdea = jest.fn();
//     render(<Card
//                 id={101}
//                 title="Flavor"
//                 description="Check if this is soda"
//                 removeIdea={fakeRemoveIdea}
//               />)
//     userEvent.click(screen.getByText('Delete'));
//     expect(fakeRemoveIdea).toHaveBeenCalledTimes(1);
//     expect(fakeRemoveIdea).toHaveBeenCalledWith(101)
//   })
