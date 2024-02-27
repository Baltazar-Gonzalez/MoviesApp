import { LoginForm } from "../components/LoginForm"
import { Link } from 'react-router-dom'


export function Login(){
    return (
        <>
            <h2>¡Bienvenido a MediaApp!</h2>
            <LoginForm/>
            <span>¿Todavia no tienes una cuenta? </span>
            <Link>Registrate</Link>
        </>
    )
}