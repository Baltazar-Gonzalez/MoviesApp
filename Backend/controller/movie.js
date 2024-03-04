import { MovieModel } from '../models/movie.js'

export class MovieController {
  //Traer peliculas populares
  static async getPopulars(req, res) {
    const { page = 1 } = req.query
    try {
      const movies = await MovieModel.getPopulars(page)
      return res.json(movies)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Traer peliculas en cartelera
  static async getNowPlaying(req, res) {
    const { page = 1 } = req.query
    try {
      const movies = await MovieModel.getNowPlaying(page)
      return res.json(movies)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Traer peliculas proximas en estrenarse
  static async getUpcoming(req, res) {
    const { page = 1 } = req.query
    try {
      const movies = await MovieModel.getUpcoming(page)
      return res.json(movies)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Traer peliculas animadas
  static async getAnimationMovies(req, res) {
    const { page = 1 } = req.query
    try {
      const movies = await MovieModel.getAnimationMovies(page)
      return res.json(movies)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Traer tendencias
  static async getTrendingList(req, res) {
    const { page = 1 } = req.query
    try {
      const movies = await MovieModel.getTrendingList(page)
      return res.json(movies)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Traer lista de generos de peliculas
  static async getMoviesGenresList(req, res) {
    try {
      const movies = await MovieModel.getMoviesGenresList()
      return res.json(movies)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Traer pelicula por id
  static async getById(req, res) {
    const { id } = req.params
    try {
      const movies = await MovieModel.getById(id)
      return res.json(movies)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Buscar pelicula
  static async getBySearch(req, res) {
    const { query, page = 1 } = req.query
    try {
      const movies = await MovieModel.getBySearch(query, page)
      return res.json(movies)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
