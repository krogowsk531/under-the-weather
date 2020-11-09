import React from 'react'
import '@testing-library/jest-dom'
import { screen, fireEvent, render, waitFor } from '@testing-library/react'
import List from './List.js'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'



describe('List', () => {

  it('should go to the home page when back to weather is clicked', () => {
    const fakeHistory = createMemoryHistory()
    const mockListArray = [{item: 'socks', degrees: '30'}]
    render(<Router history={fakeHistory}>
              <List clothing={mockListArray} />
          </Router>
        );

    userEvent.click(screen.getByRole('button', {name: 'Back to Weather!'}))
    expect(fakeHistory.entries[1].pathname).toEqual('/')
  })
})
