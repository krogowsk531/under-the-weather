import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import ComfortForm from './ComfortForm.js'

describe('ComfortForm', () => {
  it('should have two input fields and two buttons', () => {
    render (<ComfortForm />)

    expect(screen.getByText('Clothing Item:', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Degrees Added:')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Add'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Delete'})).toBeInTheDocument();
  })
})
