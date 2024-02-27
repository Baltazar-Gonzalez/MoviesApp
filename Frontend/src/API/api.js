import axios from "axios"

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const endpoints = {
    getMovies: `/movies`,
    getPopularMovies: '/movies/populares',
    getNowPlayingMovies: '/movies/now-playing',
    getAnimationMovies: '/movies/animacion',
    getMoviesById: (id) => `/movies/${id}`,
}

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
         "Content-Type": "application/json"
    }
})

export {instance, endpoints}