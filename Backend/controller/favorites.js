import { FavoriteModel } from '../models/favorites.js'

export class FavoriteController {
  //Creación de favorito
  static async createFavorite(req, res) {
    const { favId, type, userId } = req.body
    try {
      const existingFavorite = await FavoriteModel.findOne({
        where: {
          favId: favId,
          userId: userId,
        },
      })

      if (existingFavorite) {
        return res.status(400).json({
          message: 'El usuario ya tiene este elemento en favoritos',
        })
      }

      const newFavorite = await FavoriteModel.create({
        favId,
        type,
        userId,
      })

      return res
        .status(200)
        .json({ newFavorite, message: 'Agregado a favoritos' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Eliminación de favorito
  static async deleteFavorite(req, res) {
    const { userId, favId } = req.params
    try {
      await FavoriteModel.destroy({
        where: {
          userId,
          favId,
        },
      })
      return res.status(200).json({ message: 'Eliminado de favoritos' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Busqueda de favoritos
  static async getByUserId(req, res) {
    const { userId } = req.params
    const page = req.query.page ?? 1
    const limit = 20
    try {
      const { count, rows } = await FavoriteModel.findAndCountAll({
        where: { userId },
        limit,
        offset: (page - 1) * limit,
      })

      const totalPages = Math.ceil(count / limit)

      const favorites = {
        page,
        results: rows,
        total_pages: totalPages,
        total_results: count,
      }

      return res.status(200).json(favorites)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Verificación de favorito
  static async isUserFavorite(req, res) {
    const { userId, favId } = req.params
    try {
      const existingFavorite = await FavoriteModel.findOne({
        where: {
          favId: favId,
          userId: userId,
        },
      })
      if (existingFavorite) {
        return res.status(200).json(existingFavorite)
      } else {
        return res
          .status(404)
          .json({ message: 'Elemento no encontrado en la lista de favoritos' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
