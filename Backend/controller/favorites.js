import { FavoriteModel } from '../models/favorites.js'

export class FavoriteController {
  static async createFavorite(req, res) {
    const { id, favId, type, userId } = req.body
    try {
      const existingFavorite = await FavoriteModel.findOne({
        where: {
          favId: favId,
          userId: userId,
        },
      })

      if (existingFavorite) {
        res.status(400).json({
          message: 'El usuario ya tiene este elemento en favoritos',
        })
      }

      const newFavorite = await FavoriteModel.create({
        id,
        favId,
        type,
        userId,
      })

      res.status(200).json(newFavorite)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
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

      res.status(200).json(favorites)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
