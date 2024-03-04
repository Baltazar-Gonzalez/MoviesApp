import { Router } from 'express'
import { FavoriteController } from '../controller/favorites.js'
const favoritesRoutes = Router()

favoritesRoutes.get('/', (req, res) => {
  res.status(200)
})
//Crear favorito
favoritesRoutes.post('/', FavoriteController.createFavorite)

//Lista de favoritos del usuario
favoritesRoutes.get('/:userId', FavoriteController.getByUserId)

//Busqueda de favorito del usuario
favoritesRoutes.get('/:userId/:favId', FavoriteController.isUserFavorite)

//Eliminación de favorito del usuario
favoritesRoutes.get('/delete/:userId/:favId', FavoriteController.deleteFavorite)

export default favoritesRoutes
