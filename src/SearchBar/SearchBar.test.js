import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import SearchBar from './SearchBar.js'

describe('SearchBar', () => {
  it('should have one input field and a button', () => {
    render (<SearchBar updateAppLocation/>)

    expect(screen.getByText('Location:')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Get Weather!'})).toBeInTheDocument();
  })
})
