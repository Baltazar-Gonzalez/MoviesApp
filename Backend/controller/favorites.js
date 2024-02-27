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
                return res.status(400).json({
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
        const { userId } = req.params;

        try {
          const favorites = await FavoriteModel.findAll({ where: { userId } });
    
          if (!favorites) {
            return res.status(404).json({ message: 'No se encontraron favoritos para este usuario' });
          }
          return res.status(200).json(favorites);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
    }
}
