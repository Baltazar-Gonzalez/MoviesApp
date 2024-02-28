import { endpoints } from "./API/api"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/Layout'
import { Home } from './screens/Home'
import { Search } from './screens/Search'
import { Login } from './screens/Login'
import { Register } from './screens/Register'
import { Media } from './screens/Media'
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

                    <Route path="/movies/popular" element={<MediaList category={endpoints.getPopularMovies} />} /> 
                    <Route path="/movies/cartelera" element={<MediaList category={endpoints.getNowPlayingMovies} />} />
                    <Route path="/movies/proximamente" element={<MediaList category={endpoints.getUpcomingMovies} />} />
                 
                    <Route path="/series/popular" element={<MediaList category={endpoints.getPopularSeries}/>} />
                    <Route path="/series/en-emision" element={<MediaList category={endpoints.getOnAirSeries}/>} />

                    <Route path="/movies/:id" element={<Media media="movies" />} />
                    <Route path="/series/:id" element={<Media media="series" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppLayout>
        </BrowserRouter>
    )
}

export default App
