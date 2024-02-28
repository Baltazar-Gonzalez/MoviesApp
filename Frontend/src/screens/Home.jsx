import { List } from '../components/List.jsx'
import { endpoints } from '../API/api'

export function Home() {
    return (
        <>
            <List title="Tendencias" category={endpoints.getPopularMovies} />
            <List
                title="En cartelera"
                category={endpoints.getNowPlayingMovies}
            />
            <List title="Animación" category={endpoints.getAnimationMovies} />
        </>
    )
}
