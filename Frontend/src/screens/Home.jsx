import { List } from '../components/List.jsx'
import { endpoints } from "../API/api"

export function Home() {
    return (
        <>
            <List
                title="Tendencias"
                category={endpoints.getPopularMovies}
                media="movies"
            />
            <List
                title="En cartelera"
                category={endpoints.getNowPlayingMovies}
                media="movies"
            />
            <List
                title="Animación"
                category={endpoints.getAnimationMovies}
                media="movies"
            />
        </>
    )
}
