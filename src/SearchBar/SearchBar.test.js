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

//   it('when submit is clicked loginHandler is called', () => {
//   const mockSet = jest.fn();
//   const aUser = {}
//   Login.loginHandler = jest.fn();
//   render(
//
//       <Login
//     setUser={mockSet}
//     userId={aUser}/>
//
// )
//   userEvent.click(screen.getByText('Submit'))
//   expect(Login.loginHandler).toHaveBeenCalledTimes(1)
// })
})
