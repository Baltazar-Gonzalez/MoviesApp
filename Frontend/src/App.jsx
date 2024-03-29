import { endpoints } from './API/api'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/Layout'
import { Home } from './screens/Home'
import { Search } from './screens/Search'
import { Login } from './screens/Login'
import { Register } from './screens/Register'
import { Media } from './screens/Media'
import { User } from './screens/User'
import { MediaList } from './screens/MediaList'
import { NotFound } from './screens/NotFound'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:media?" element={<Search />} />

          <Route path="/movies/popular" element={<MediaList category={endpoints.getPopularMovies} title="Peliculas populares" />}/>
          <Route path="/movies/cartelera" element={<MediaList category={endpoints.getNowPlayingMovies} title="Peliculas en cartelera"/>}/>
          <Route path="/movies/proximamente" element={<MediaList category={endpoints.getUpcomingMovies} title="Proximamente"/>}/>
          <Route path="/series/popular" element={<MediaList category={endpoints.getPopularSeries} title="Series populares"/>}/>
          <Route path="/series/en-emision" element={<MediaList category={endpoints.getOnAirSeries} title="Series en emisión"/>}/>

          <Route path="/movies/:id" element={<Media media="movies" />} />
          <Route path="/series/:id" element={<Media media="series" />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
