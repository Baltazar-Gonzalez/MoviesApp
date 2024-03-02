import { MovieModel } from '../models/movie.js'

export class MovieController {
  static async getPopulars(req, res) {
    const {page = 1 } = req.query
    try {
      const movies = await MovieModel.getPopulars(page)
      res.json(movies)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  static async getNowPlaying(req, res) {
    const {page = 1 } = req.query
    try {
      const movies = await MovieModel.getNowPlaying(page)
      res.json(movies)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  static async getUpcoming(req, res) {
    const {page = 1 } = req.query
    try {
      const movies = await MovieModel.getUpcoming(page)
      res.json(movies)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  static async getAnimationMovies(req, res) {
    const {page = 1 } = req.query
    try {
      const movies = await MovieModel.getAnimationMovies(page)
      res.json(movies)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  static async getTrendingList(req, res) {
    const {page = 1 } = req.query
    try {
      const movies = await MovieModel.getTrendingList(page)
      res.json(movies)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  static async getMoviesGenresList(req, res) {
    try {
      const movies = await MovieModel.getMoviesGenresList()
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
