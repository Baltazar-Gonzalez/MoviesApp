import { Router } from 'express'
import { FavoriteController } from '../controller/favorites.js'
const favoritesRoutes = Router()

favoritesRoutes.get('/', (req, res) => {
  res.status(200)
})
favoritesRoutes.post('/', FavoriteController.createFavorite)

favoritesRoutes.get('/:userId', FavoriteController.getByUserId)

export default favoritesRoutes
