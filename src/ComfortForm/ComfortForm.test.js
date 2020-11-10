import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import ComfortForm from './ComfortForm.js'
import userEvent from '@testing-library/user-event'

describe('ComfortForm', () => {
  it('should have two input fields and two buttons', () => {
    render (<ComfortForm />)

    expect(screen.getByText('Clothing Item:', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Degrees Added:')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Add'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Delete'})).toBeInTheDocument();
  })

  it('should invoke handleComfortForm when the add button is clicked', () => {
    const fakeAddClothing = jest.fn();
    render (<ComfortForm handleComfortForm={fakeAddClothing} />)

    userEvent.click(screen.getByText('Add'));
    expect(fakeAddClothing).toHaveBeenCalledTimes(1);
  })

  it('should invoke handleClearItem when the delete button is clicked', () => {
    const fakeRemoveClothing = jest.fn();
    render(<ComfortForm handleClearItem={fakeRemoveClothing} />)

    userEvent.click(screen.getByText('Delete'))
    expect(fakeRemoveClothing).toHaveBeenCalledTimes(1);
  })
})


// it('should invoke removeIdea with the card id when button is clicked', () => {
//   const fakeRemoveIdea = jest.fn();
//   render(<Card
//               id={101}
//               title="Flavor"
//               description="Check if this is soda"
//               removeIdea={fakeRemoveIdea}
//             />)
//   userEvent.click(screen.getByText('Delete'));
//   expect(fakeRemoveIdea).toHaveBeenCalledTimes(1);
//   expect(fakeRemoveIdea).toHaveBeenCalledWith(101)
// })
