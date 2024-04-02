import { Row, Col, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useAuth } from '../context/auth'
import { format } from 'date-fns'
import esLocale from 'date-fns/locale/es'

export function UserInformation({ data }) {
  if (!data || !data.name) {
    return null
  }

  const { logout, user } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()

  console.log(data, id)
  //Cierra sesión del usuario
  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <Row
      className="p-10 text-white"
      style={{
        backgroundImage: 'url(./assets/user-bg.svg)',
        backgroundSize: 'auto 600px',
        backgroundPosition: 'center ',
        backgroundRepeat: 'repeat no-repeat',
        backgroundColor: '#032541',
      }}
    >
      <Col>
        <Row className="gap-8" align="middle" justify="center">
          <Col>
            <div className="bg-[#01c6ac] w-[150px] h-[150px] text-[64px] rounded-full flex items-center justify-center text-white">
              <span>{data?.name[0]}</span>
            </div>
          </Col>
          <Col className="text-center md:text-left">
            <Row align="middle" justify="center">
              <Col xs={24} md={24}>
                <span className="text-4xl font-bold ">{data?.name}</span>
                {data?.createdAt && (
                  <span className="text-xl pl-4">
                    miembro desde el{' '}
                    {format(
                      new Date(data?.createdAt),
                      "d 'de' MMMM 'de' yyyy",
                      { locale: esLocale },
                    )}
                  </span>
                )}
              </Col>
              {user.id == id ? (
                <Col className="pt-4" md={24}>
                  <Button
                    onClick={handleLogout}
                    className="bg-[#ff4d4f] text-white hover:bg-[white] hover:text-[#ff4d4f] rounded"
                    size="large"
                    danger
                  >
                    Cerrar Sesión
                  </Button>
                </Col>
              ) : (
                false
              )}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
