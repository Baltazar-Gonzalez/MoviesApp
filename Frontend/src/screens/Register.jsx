import { RegisterForm } from '../components/RegisterForm'
import { Link } from 'react-router-dom'

export function Register() {
    return (
        <>
            <h2>¡Bienvenido a MediaApp!</h2>
            <RegisterForm />
            <span>¿Ya tienes una cuenta? </span>
            <Link>Inicia Sesión</Link>
        </>
    )
}
