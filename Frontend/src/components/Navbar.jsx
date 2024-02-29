import { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { Layout, Input, Button, Menu } from 'antd'
import { useAuth } from '../context/auth'

const { Search } = Input
const { Header } = Layout

const items = [
  {
    label: 'Peliculas',
    key: 'movies',
    icon: false,
    children: [
      {
        label: <Link to="/movies/popular">Populares</Link>,
        key: 'popularMovies',
      },
      {
        label: <Link to="/movies/cartelera">En carteleras</Link>,
        key: 'nowPlaying',
      },
      {
        label: <Link to="/movies/proximamente">Proximamente</Link>,
        key: 'onComing',
      },
    ],
  },
  {
    label: 'Series',
    key: 'series',
    icon: false,
    children: [
      {
        label: <Link to="/series/popular">Populares</Link>,
        key: 'popularSeries',
      },
      {
        label: <Link to="/series/en-emision">En Emisión</Link>,
        key: 'onAir',
      },
    ],
  },
]

export function NavBar() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState(searchParams.get('query') ?? '')

  function handleSubmit() {
    navigate({
      pathname: `/search`,
      search: `?query=${value}`,
    })
  }

  return (
    <Header className="flex items-center justify-between">
      <Link className="text-white" to="/">
        MediaApp
      </Link>
      <Menu items={items} mode="horizontal" />
      <Search
        onSearch={handleSubmit}
        onChange={(e) => setValue(e.target.value)}
        className="w-96"
        placeholder="input search text"
        enterButton
        value={value}
      />
      <div>
        {isAuthenticated() ? (
          <p>Logeado</p>
        ) : (
          <>
            <Link to="/login">
              <Button type="primary" className="mr-2">
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button type="default">Registrarse</Button>
            </Link>
          </>
        )}
      </div>
    </Header>
  )
}
