import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import PersonalTempForm from './PersonalTempForm.js'
import userEvent from '@testing-library/user-event'


describe('PersonalTempForm', () => {
  it('should have one input field and a button', () => {
    render (<PersonalTempForm />)

    expect(screen.getByText('Desired Temp:')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Submit'})).toBeInTheDocument();
  })

  it('should invoke handleSubmitDegrees when the submit button is clicked', () => {
    const fakeAddDegrees = jest.fn();
    render(<PersonalTempForm handleSubmitDegrees={fakeAddDegrees} />)

    userEvent.click(screen.getByText('Submit'))
    expect(fakeAddDegrees).toHaveBeenCalledTimes(1);
  })
})
