import { render, screen } from '@testing-library/react'
import App from './App'

test.only('Should render the header', async () => {
  render(<App />)

  const heading = screen.getByAltText(/Alchemy/i)
  expect(heading).toBeInTheDocument()
})
