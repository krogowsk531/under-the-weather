import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import SearchBar from './SearchBar.js'
import userEvent from '@testing-library/user-event'


describe('SearchBar', () => {
  it('should have one input field and a button', () => {
    render (<SearchBar />)

    expect(screen.getByText('Location:')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Get Weather!'})).toBeInTheDocument();
  })

  it('when get weather is clicked updateAppLocation is called', () => {
    const mockUpdate = jest.fn()
    render (<SearchBar updateAppLocation={mockUpdate}/>)

    userEvent.click(screen.getByText('Get Weather!'))
    expect(mockUpdate).toHaveBeenCalledTimes(1)
  })
})
