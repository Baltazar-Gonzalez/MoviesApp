import { Row, Col, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'
import { format } from 'date-fns'
import esLocale from 'date-fns/locale/es'

export function UserInformation(){
  const { logout, user } = useAuth()
  const date = new Date(user?.cretedAt)
  const navigate = useNavigate()

  //Cierra sesión del usuario
  function handleLogout(){
    logout()
    navigate("/")
  }

    return (
        <Row className='p-10 text-white' style={{
          backgroundImage: "url(../src/assets/user-bg.svg)",
          backgroundSize: 'auto 600px',
          backgroundPosition: 'center ',
          backgroundRepeat: 'repeat no-repeat',
          backgroundColor: "#032541"
        }}>
          <Col>
            <Row align="middle">  
              <Col>
                <div className='bg-[#01c6ac] w-[150px] h-[150px] text-[64px] rounded-full flex items-center justify-center text-white'>
                  <span>{user?.name[0]}</span>
                </div>
              </Col>
              <Col className='pl-10 '>
                <Row>
                  <Col xs={24}>
                  <span className='text-4xl font-bold'>{user?.name}</span>
                    {user?.createdAt &&
                      <span className='text-xl pl-4'>miembro desde el {format(new Date(user?.createdAt), 'd \'de\' MMMM \'de\' yyyy', {locale: esLocale})}</span>
                    }
                  </Col>
                  <Col className='pt-4' xs={24}>
                    <Button onClick={handleLogout} className='bg-[#ff4d4f] text-white hover:bg-[white] hover:text-[#ff4d4f] rounded' size='large' danger>Cerrar Sesión</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      )
}