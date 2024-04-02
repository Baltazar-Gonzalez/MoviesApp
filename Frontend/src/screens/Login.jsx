import { LoginForm } from '../components/LoginForm'
import { Flex } from 'antd'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <Flex className="h-[calc(100vh-64px)]" align="center" justify="center">
      <Flex
        className="bg-white min-h-[60%] w-[560px] py-[50px] px-10 rounded-lg shadow-lg"
        style={{ border: '1px solid #dbdbdb' }}
        align="center"
        justify="space-evenly"
        vertical
      >
        <h2 className="mb-8">Iniciar sesión en tu cuenta</h2>
        <div className="w-full">
          <LoginForm />
        </div>
        <div>
          <span>¿Todavia no tienes una cuenta? </span>
          <Link to="/register">Registrate</Link>
        </div>
      </Flex>
    </Flex>
  )
}
