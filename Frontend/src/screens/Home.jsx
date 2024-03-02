import { List } from '../components/List.jsx'
import { endpoints } from '../API/api'
import { Header } from '../components/Header.jsx'

export function Home() {
  return (
    <>
      <Header/>
      <List title="Tendencias" category={endpoints.getPopularMovies} />
      <List title="En cartelera" category={endpoints.getNowPlayingMovies} />
      <List title="Animación" category={endpoints.getAnimationMovies} />
    </>
  )
}
