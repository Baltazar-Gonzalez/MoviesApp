import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const endpoints = {
    //Movies
    getMovies: `/movies`,
    getPopularMovies: (page) => '/movies/populars'.concat(page ? `?page=${page}` : ``),
    getNowPlayingMovies: (page) => '/movies/now-playing'.concat(page ? `?page=${page}` : ``),
    getUpcomingMovies: (page) => '/movies/upcoming'.concat(page ? `?page=${page}` : ``),
    getAnimationMovies: (page) => '/movies/animation'.concat(page ? `?page=${page}` : ``),
    getTrendingList: '/movies/trending',
    getMoviesGenresList: '/movies/genres',
    getMovieById: (id) => `/movies/${id}`,

    //Series
    getSeries: `/series`,
    getPopularSeries: (page) => '/series/populars'.concat(page ? `?page=${page}` : ``),
    getOnAirSeries: (page) => '/series/on-the-air'.concat(page ? `?page=${page}` : ``),
    getSeriesGenresList: '/series/genres',
    getSerieById: (id) => `/series/${id}`,

    //Usuarios
    getUsers: `/users`,
    postUser: `/users`,
    getAuth: `/users/auth`,
    getAllUsers: `/users/all`,
    postUserLogin: `/users/login`,
    getUserById: (id) => `/users/${id}`,
    deleteUserById: (id) => `/users/${id}`,

    //Favoritos
    getFavorites: `/favorites`,
    postFavorite: `/favorites`,
    getFavoritesByUserId: (userId) => `/favorites/${userId}`,
    getIsUserFavorite: (userId, id) => `/favorites/${userId}/${id}`,
    deleteFavoriteByUserId: (userId, id) => `/favorites/delete/${userId}/${id}`,

    //Busqueda
    getBySearch: (media, search, page) =>
        `${media}/search?query=${search}`.concat(page ? `&page=${page}` : ``),
}

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        "Authorization": localStorage.getItem('token') ?? ""
    },
})

export { instance, endpoints }
