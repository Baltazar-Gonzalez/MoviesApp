import { SerieModel } from '../models/serie.js'

export class SerieController {
  static async getPopulars(req, res) {
    try {
      const series = await SerieModel.getPopulars()
      res.json(series)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  static async getOnTheAir(req, res) {
    try {
      const series = await SerieModel.getOnTheAir()
      res.json(series)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  static async getSeriesGenresList(req, res) {
    try {
      const series = await SerieModel.getSeriesGenresList()
      res.json(series)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  static async getById(req, res) {
    const { id } = req.params
    try {
      const series = await SerieModel.getById(id)
      res.json(series)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  static async getBySearch(req, res) {
    const { query, page = 1 } = req.query
    try {
      const series = await SerieModel.getBySearch(query, page)
      res.json(series)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
