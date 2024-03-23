import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { Input, Button, Menu, Row, Col, Flex, Drawer } from 'antd'
import { AiOutlineMenu } from "react-icons/ai";
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
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState()

  //Actualiza el valor del buscador
  useEffect(()=>{
    setValue(searchParams.get('query') ?? '')
  }, [searchParams])

  //Permite realizar la busqueda
  function handleSubmit() {
    setOpen(false)
    navigate({
      pathname: `/search`,
      search: `?query=${value}`,
    })
  }

  return (
    <Flex className='h-16 bg-[#032541] px-4 lg:px-[0px] text-white justify-between md:justify-around' align='center'>
      <Row className='min-w-[300px] md:min-w-[320px]' align="middle">
        <Col xs={10} md={12}>
          <Link className="text-white" to="/">
            <h1 className='text-[22px] md:text-[28px]'>MediaApp</h1>
          </Link>
        </Col>
        <Col xs={14} md={12}>
          <Menu className='bg-transparent font-bold w-full' items={items} mode="horizontal"  />
        </Col>
      </Row>
      <Row className='hidden md:flex'>
        <Search
            onSearch={handleSubmit}
            onChange={(e) => setValue(e.target.value)}
            className="w-96"
            placeholder="Buscar una película o serie..."
            enterButton
            value={value}
          />
      </Row>
      <Row className='hidden md:flex'>
        <Col>
          {isAuthenticated() ? (
            <Row>
              <Col xs={24}>
                <Link className='text-white font-bold text-lg' to={`/users/${user.id}`}>
                  <Flex gap={6}>
                      <div className='bg-[#01c6ac] min-w-[30px] h-[30px] rounded-full flex items-center justify-center text-white'>
                          <span>{user.name[0]}</span>
                      </div>
                        <span>{user.name}</span>
                  </Flex>
                </Link>
              </Col>
            </Row>
          ) : (
            <Row className='min-w-[240px]'>
              <Col>
                <Link to="/login">
                  <Button type="primary" className="mx-2" >
                    Iniciar Sesión
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="/register">
                  <Button type="default" >Registrarse</Button>
                </Link>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
      <Row className='md:hidden min-w-[30px] p-1 text-xl rounded text-center' style={{"border": ".5px solid white"}} onClick={e => setOpen(true)}>
        <AiOutlineMenu className='min-w-[20px]'/>
      </Row>
      {/* Responsive Drawer */}
        <Drawer className='bg-[#032541] text-slate-100' open={open} onClose={e => setOpen(false)}>
          <Row className='gap-6'>
            <Col xs={24}>
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
            </Col>
            <Col xs={24}>
              <Row>
                <Col>
                  {isAuthenticated() ? (
                    <Row>
                      <Col xs={24}>
                        <Link className='text-white font-bold text-lg' to={`/users/${user.id}`} onClick={e => setOpen(false)}>
                          <Flex gap={6} >
                              <div className='bg-[#01c6ac] min-w-[30px] h-[30px] rounded-full flex items-center justify-center text-white'>
                                  <span>{user.name[0]}</span>
                              </div>
                                <span>{user.name}</span>
                          </Flex>
                        </Link>
                      </Col>
                    </Row>
                  ) : (
                    <>
                      <Link to="/login" onClick={e => setOpen(false)}>
                        <Button type="primary" className="mr-2">
                          Iniciar Sesión
                        </Button>
                      </Link>
                      <Link to="/register" onClick={e => setOpen(false)}>
                        <Button type="default">Registrarse</Button>
                      </Link>
                    </>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Drawer>
    </Flex>
  )
}
