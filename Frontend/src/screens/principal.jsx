import { List } from "../components/List.jsx"
import './principal.css'

export function Principal(){
    return (
        <>
            <List title="Tendencias" url="http://localhost:5500/movies/populares"/>
            <List title="En cartelera" url="http://localhost:5500/movies/now-playing"/>
            <List title="Animación" url="http://localhost:5500/movies/animacion"/>
        </>
    )
}