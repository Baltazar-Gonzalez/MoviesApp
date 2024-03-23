import { RegisterForm } from '../components/RegisterForm'
import { Flex } from 'antd'
import { Link } from 'react-router-dom'

export function Register() {
  return (
    <Flex className='h-[calc(100vh-64px)]'  align='center' justify='center'>
      <Flex className='bg-white w-[560px] py-[50px] px-10 rounded-lg shadow-lg' style={{border: "1px solid #dbdbdb"}} align='center' vertical>
        <h2 className='mb-8'>¡Bienvenido a MediaApp! Crea una cuenta</h2>
        <div className='w-full'>
        <RegisterForm />
        </div>
        <div>
          <span>¿Ya tienes una cuenta? </span>
          <Link to="/login">Inicia Sesión</Link>
        </div>
      </Flex>
    </Flex>
  )
}
