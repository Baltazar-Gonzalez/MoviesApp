import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { Input, Button, Menu, Row, Col, Flex } from 'antd'
import { useAuth } from '../context/auth'

const { Search } = Input

//Creación de los items del menu
const items = [
  {
    label: 'Peliculas',
    key: 'movies',
    icon: false,
    children: [
      {
        label: <Link className='text-black' to="/movies/popular">Populares</Link>,
        key: 'popularMovies',
      },
      {
        label: <Link className='text-black' to="/movies/cartelera">En carteleras</Link>,
        key: 'nowPlaying',
      },
      {
        label: <Link className='text-black' to="/movies/proximamente">Proximamente</Link>,
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
        label: <Link className='text-black' to="/series/popular">Populares</Link>,
        key: 'popularSeries',
      },
      {
        label: <Link className='text-black' to="/series/en-emision">En Emisión</Link>,
        key: 'onAir',
      },
    ],
  },
]

export function NavBar() {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState()

  //Actualiza el valor del buscador
  useEffect(()=>{
    setValue(searchParams.get('query') ?? '')
  }, [searchParams])

  //Permite realizar la busqueda
  function handleSubmit() {
    navigate({
      pathname: `/search`,
      search: `?query=${value}`,
    })
  }

  return (
    <Flex className='h-16 bg-[#032541] px-[50px] text-white' align='center' justify='space-around'>
      <Row className='w-96'>
        <Col xs={12}>
          <Link className="text-white" to="/">
          <h1>MediaApp</h1>
          </Link>
        </Col>
        <Col xs={12}>
          <Menu className='bg-transparent font-bold w-full' items={items} mode="horizontal"  />
        </Col>
      </Row>
      <Row>
        <Search
            onSearch={handleSubmit}
            onChange={(e) => setValue(e.target.value)}
            className="w-96"
            placeholder="Buscar una película o serie..."
            enterButton
            value={value}
          />
      </Row>
      <Row>
        <Col>
          {isAuthenticated() ? (
            <Row >
              <Col xs={24}>
                <Link className='text-white font-bold text-lg' to={`/users/${user.id}`}>
                  <Flex gap={6}>
                      <div className='bg-[#01c6ac] w-[30px] h-[30px] rounded-full flex items-center justify-center text-white'>
                          <span>{user.name[0]}</span>
                      </div>
                        <span>{user.name}</span>
                  </Flex>
                </Link>
              </Col>
            </Row>
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
        </Col>
      </Row>
    </Flex>
  )
}

/*
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
*/