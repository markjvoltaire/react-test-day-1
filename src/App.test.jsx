import { render, screen } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const heading = screen.getByAltText(/Alchemy/i)
  expect(heading).toBeInTheDocument()

  const headingText = screen.getByText(/Meet/i)
  expect(headingText).toBeInTheDocument()

  const userName = await screen.findByText(/Vonta/i)
  expect(userName).toBeInTheDocument()

  const endPoint = await screen.findByText(/!/i)
  expect(endPoint).toBeInTheDocument()
})
