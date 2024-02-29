import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const endpoints = {
    //Movies
    getMovies: `/movies`,
    getPopularMovies: '/movies/populars',
    getNowPlayingMovies: '/movies/now-playing',
    getUpcomingMovies: '/movies/upcoming',
    getAnimationMovies: '/movies/animation',
    getMoviesGenresList: '/movies/genres',
    getMovieById: (id) => `/movies/${id}`,

    //Series
    getSeries: `/series`,
    getPopularSeries: '/series/populars',
    getOnAirSeries: '/series/on-the-air',
    getSeriesGenresList: '/series/genres',
    getSerieById: (id) => `/series/${id}`,

    //Usuarios
    getUsers: `/users`,
    postUser: `/users`,
    getAllUsers: `/users/all`,
    postUserLogin: `/users/login`,
    getUserById: (id) => `/users/${id}`,
    deleteUserById: (id) => `/users/${id}`,

    //Favoritos
    getFavorites: `/favorites`,
    postFavorite: `/favorites`,
    getFavoritesByUserId: (userId) => `/favorites/${userId}`,
    deleteFavoriteByUserId: (userId, id) => `/favorites/${userId}/${id}`,

    //Busqueda
    getBySearch: (media, search, page) =>
        `${media}/search?query=${search}`.concat(page ? `&page=${page}` : ``),
}

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export { instance, endpoints }
