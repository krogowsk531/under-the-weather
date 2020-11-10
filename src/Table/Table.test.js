import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Table from './Table.js'

describe('Table', () => {
  it('should render a table', () => {
    render(<Table />)

    expect(screen.getByText('ITEM')).toBeInTheDocument()
    expect(screen.getByText('DEGREES')).toBeInTheDocument()
    expect(screen.getByText('Gloves')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })
})
