import { Button, Form, Input, Row, Col, notification } from 'antd'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
const { Item } = Form

export function LoginForm() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [api, contextHolder] = notification.useNotification();

  //Configuración de las notificaciones
  const openNotificationWithIcon = (type, message = "Parametros invalidos") => {
    api[type]({
      message,
    });
  }

  //Envio de formulario al login
  function handleSubmit(user){
    login({
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      openNotificationWithIcon("success", response)
      navigate("/")
    })
    .catch((error) => {
      openNotificationWithIcon("error", "Email y/o contraseña invalidos")
    })
  }

  return (
    <Row className='' justify="center">
      {contextHolder}
      <Col xs={24}>
        <Form layout='vertical' onFinish={handleSubmit}
          onFinishFailed={e=>console.log(e)}>
          <Item name="email" label="Email" rules={[
            {
              required: true,
              message: 'Por favor ingrese su Email',
            },{
              type: 'email',
              message: "No es un email valido"
            }
          ]}>
            <Input/>
          </Item>
          <Item name="password" label="Constraseña" rules={[
            {
              required: true,
              message: 'Por favor ingrese su Contraseña',
            },
          ]}>
            <Input type="password" />
          </Item>
          <Item>
            <Button className='mr-2' type="primary" htmlType="submit">Iniciar sesión</Button>
            <Button onClick={e => navigate("/")} type="text">Cancelar</Button>
          </Item>
        </Form>
      </Col>
    </Row>
  )
}
