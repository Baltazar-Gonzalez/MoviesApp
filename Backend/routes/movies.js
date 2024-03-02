import { Router } from 'express'
import { MovieController } from '../controller/movie.js'
const movieRoutes = Router()

movieRoutes.get('/', (req, res) => {
  res.status(200)
})

//Populares
movieRoutes.get('/populars', MovieController.getPopulars)

//En cartelera
movieRoutes.get('/now-playing', MovieController.getNowPlaying)

//Proximamente
movieRoutes.get('/upcoming', MovieController.getUpcoming)

//Animación
movieRoutes.get('/animation', MovieController.getAnimationMovies)

//Lista de tendencias
movieRoutes.get('/trending', MovieController.getTrendingList)

//Lista de generos de peliculas
movieRoutes.get('/genres', MovieController.getMoviesGenresList)

//Encontrar por busqueda
movieRoutes.get('/search', MovieController.getBySearch)

//Encontrar por id
movieRoutes.get('/:id', MovieController.getById)

export default movieRoutes
