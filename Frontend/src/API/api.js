import axios from "axios"

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const endpoints = {
    //Movies
    getMovies: `/movies`,
    getPopularMovies: '/movies/populars',
    getNowPlayingMovies: '/movies/now-playing',
    getUpcomingMovies: '/movies/upcoming',
    getAnimationMovies: '/movies/animation',
    getMoviesById: (id) => `/movies/${id}`,

    //Series
    getSeries: `/series`,
    getPopularSeries: '/series/populars',
    getOnAirSeries: '/series/on-the-air',
    getSeriesById: (id) => `/series/${id}`,

    //Busqueda
    getBySearch:(media, search, page) => `${media}/search?query=${search}`.concat(page ? `&page=${page}`:``)
}

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
         "Content-Type": "application/json"
    }
})

export {instance, endpoints}