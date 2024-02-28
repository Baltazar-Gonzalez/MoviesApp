import { MovieModel } from '../models/movie.js'

export class MovieController {
    static async getPopulars(req, res) {
        try {
            const movies = await MovieModel.getPopulars()
            res.json(movies)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    static async getNowPlaying(req, res) {
        try {
            const movies = await MovieModel.getNowPlaying()
            res.json(movies)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    static async getUpcoming(req, res) {
        try {
            const movies = await MovieModel.getUpcoming()
            res.json(movies)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    static async getAnimationMovies(req, res) {
        try {
            const movies = await MovieModel.getAnimationMovies()
            res.json(movies)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    static async getById(req, res) {
        const { id } = req.params
        try {
            const movies = await MovieModel.getById(id)
            res.json(movies)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    static async getBySearch(req, res) {
        const { query, page = 1 } = req.query
        try {
            const movies = await MovieModel.getBySearch(query, page)
            res.json(movies)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}
