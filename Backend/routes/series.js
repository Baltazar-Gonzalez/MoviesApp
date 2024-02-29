import { Router } from 'express'
import { SerieController } from '../controller/serie.js'
const serieRoutes = Router()

serieRoutes.get('/', (req, res) => {
  res.status(200)
})

//Populares
serieRoutes.get('/populars', SerieController.getPopulars)

//Al aire
serieRoutes.get('/on-the-air', SerieController.getOnTheAir)

//Lista de generos de series
serieRoutes.get('/genres', SerieController.getSeriesGenresList)

//Encontrar por busqueda
serieRoutes.get('/search', SerieController.getBySearch)

//Encontrar por id
serieRoutes.get('/:id', SerieController.getById)

export default serieRoutes
