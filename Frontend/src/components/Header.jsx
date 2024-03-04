import { Row, Col, Input } from 'antd'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
const { Search } = Input

export function Header() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState(searchParams.get('query') ?? '')

  //Permite realizar la busqueda
  function handleSubmit() {
    navigate({
      pathname: `/search`,
      search: `?query=${value}`,
    })
  }

  return (
    <div
      style={{
        backgroundImage: `url(./src/assets/header-background.avif)`,
        backgroundSize: 'auto 1360px',
        backgroundPosition: 'center -750px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Row
        className="px-10 py-8 h-[400px] text-white content-center gap-6"
        style={{
          background:
            'linear-gradient(to bottom right, rgba(5, 144, 199, .60), rgba(5, 144, 199, .45))',
        }}
        align="middle"
      >
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <p className="text-4xl font-extrabold">Bienvenido a MediaApp</p>
            </Col>
            <Col xs={24}>
              <p className="text-2xl font-semibold">
                Millones de películas y series por descubrir. Explora ya.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <Search
            className="w-full"
            placeholder="Buscar una pelicula o serie..."
            size="large"
            onSearch={handleSubmit}
            onChange={(e) => setValue(e.target.value)}
            enterButton
            value={value}
          />
        </Col>
      </Row>
    </div>
  )
}
