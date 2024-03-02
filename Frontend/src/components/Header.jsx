import { Row, Col, Input } from "antd"
const { Search } = Input

export function Header(){
    return(
        <div
            style={{
                backgroundImage: `url(./src/assets/header-background.avif)`,
                backgroundSize: 'auto 1360px',
                backgroundPosition: 'center -750px', // Ajustar la posición aquí
                backgroundRepeat: "no-repeat",
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
              <Col md={24}>
                <Row >
                  <Col md={24}>
                       <p className="text-4xl font-extrabold">Bienvenido a MediaApp</p> 
                  </Col>
                  <Col md={24}>
                        <p className="text-2xl font-semibold">Millones de películas y series por descubrir. Explora ya.</p> 
                  </Col>
                </Row>
              </Col>
              <Col md={24}>
                <Search
                    className="w-full"
                    placeholder="Buscar una pelicula o serie..."
                    size="large"
                    enterButton
                />
              </Col>
            </Row>
        </div>
    )
}