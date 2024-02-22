import { List } from "../components/List.jsx"

export function Home(){
    return (
        <>
            <List title="Tendencias" url="http://localhost:5500/movies/populares" media="movies"/>
            <List title="En cartelera" url="http://localhost:5500/movies/now-playing" media="movies"/>
            <List title="Animación" url="http://localhost:5500/movies/animacion" media="movies"/>
        </>
    )
}