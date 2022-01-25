import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', () => {
  render(<Home user={user} />)

  const header = screen.getByRole('img', {
    name: /header/i,
  })

  const profilePic = screen.getByRole('img', {
    name: /avatar/i,
  })

  const userName = screen.getByRole('heading', {
    name: /Vonta/i,
  })

  const userMotto = screen.getByText(/res non verba/i)

  const favoriteColor = screen.getByText(/favorite color:/i)

  const crimson = screen.getByText(/crimson/i)

  const interest = screen.getByRole('heading', {
    name: /interests/i,
  })

  const react = screen.getByText(/react/i)
  const anime = screen.getByText(/anime/i)
  const traveling = screen.getByText(/traveling/i)
  const living = screen.getByText(/living/i)
  const towerDefenseGames = screen.getByText(/tower defense games/i)
  const cardGames = screen.getByText(/card games/i)

  expect(header).toBeInTheDocument()
  expect(profilePic).toBeInTheDocument()
  expect(userName).toBeInTheDocument()
  expect(userMotto).toBeInTheDocument()
  expect(favoriteColor).toBeInTheDocument()
  expect(crimson).toBeInTheDocument()
  expect(interest).toBeInTheDocument()
  expect(react).toBeInTheDocument()
  expect(anime).toBeInTheDocument()
  expect(traveling).toBeInTheDocument()
  expect(living).toBeInTheDocument()
  expect(towerDefenseGames).toBeInTheDocument()
  expect(cardGames).toBeInTheDocument()
})
