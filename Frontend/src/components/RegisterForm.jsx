import { Button, Form, Input, Row, Col, notification } from 'antd'
import { useAuth } from '../context/auth'
import { instance, endpoints } from '../API/api'
import { useNavigate } from 'react-router-dom'
const { Item } = Form

export function RegisterForm() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [api, contextHolder] = notification.useNotification()

  //Configuración de las notificaciones
  const openNotificationWithIcon = (type, message = 'Parametros invalidos') => {
    api[type]({
      message,
    })
  }

  //Envia el formulario al register
  function handleSubmit(user) {
    instance
      .post(endpoints.postUser, {
        name: user.userName,
        email: user.email,
        image: '.',
        password: user.password,
        confirmPassword: user.confirmPassword,
      })
      .then((response) => {
        openNotificationWithIcon('success', response)
        login({
          email: user.email,
          password: user.password,
        })
        navigate('/')
      })
      .catch((error) => {
        openNotificationWithIcon('error', error?.response?.data?.message)
      })
  }

  return (
    <Row className="" justify="center">
      {contextHolder}
      <Col xs={24}>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          onFinishFailed={(e) => console.log('e')}
        >
          <Item
            name="userName"
            label="Nombre de usuario"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su nombre de Nombre de usuario',
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su Email',
              },
              {
                type: 'email',
                message: 'No es un email valido',
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            name="password"
            label="Constraseña"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su Contraseña',
              },
            ]}
          >
            <Input type="password" />
          </Item>
          <Item
            name="confirmPassword"
            label="Repetir contraseña"
            rules={[
              {
                required: true,
                message: 'Por favor repita su Contraseña',
              },
            ]}
          >
            <Input type="password" />
          </Item>
          <Item>
            <Button className="mr-2" type="primary" htmlType="submit">
              Registrarse
            </Button>
            <Button onClick={(e) => navigate('/')} type="text">
              Cancelar
            </Button>
          </Item>
        </Form>
      </Col>
    </Row>
  )
}
