import { Router } from 'express'
import { MovieController } from '../controller/movie.js'
const movieRoutes = Router()

movieRoutes.get('/', (req, res) => {
    res.status(200)
})

//Populares
movieRoutes.get('/populares', MovieController.getPopulars)

//En cartelera
movieRoutes.get('/now-playing', MovieController.getNowPlaying)

//Animación
movieRoutes.get('/animacion', MovieController.getAnimationMovies)

//Encontrar por busqueda
movieRoutes.get('/search', MovieController.getBySearch)

//Encontrar por id
movieRoutes.get('/:id', MovieController.getById)

export default movieRoutes
