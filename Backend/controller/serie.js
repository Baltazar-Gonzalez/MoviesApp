import { SerieModel } from '../models/serie.js'

export class SerieController {
  //Traer series populares
  static async getPopulars(req, res) {
    const { page = 1 } = req.query
    try {
      const series = await SerieModel.getPopulars(page)
      res.json(series)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  //Traer series al aire
  static async getOnTheAir(req, res) {
    const { page = 1 } = req.query
    try {
      const series = await SerieModel.getOnTheAir(page)
      res.json(series)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  //Traer lista de generos de series
  static async getSeriesGenresList(req, res) {
    try {
      const series = await SerieModel.getSeriesGenresList()
      return res.json(series)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Traer peliculas populares
  static async getById(req, res) {
    const { id } = req.params
    try {
      const series = await SerieModel.getById(id)
      return res.json(series)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Buscar serie
  static async getBySearch(req, res) {
    const { query, page = 1 } = req.query
    try {
      const series = await SerieModel.getBySearch(query, page)
      return res.json(series)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
