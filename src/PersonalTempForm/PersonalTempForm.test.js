import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import PersonalTempForm from './PersonalTempForm.js'

describe('PersonalTempForm', () => {
  it('should have one input field and a button', () => {
    render (<PersonalTempForm />)

    expect(screen.getByText('Desired Temp:')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Submit'})).toBeInTheDocument();
  })
})

// comfortTemp={comfortTemp}
// handleMyDegrees={handleMyDegrees}
// handleSubmitDegrees={handleSubmitDegrees}
