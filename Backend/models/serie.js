import axios from 'axios'
import { KEY } from '../config.js'

export class SerieModel {
  static async getPopulars() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?language=es-AR&api_key=${KEY}`,
      )
      return { ...response.data, type: 'series' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getOnTheAir() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/on_the_air?language=es-AR&timezone=AR&api_key=${KEY}`,
      )
      return { ...response.data, type: 'series' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getSeriesGenresList() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?language=es&api_key=${KEY}`,
      )
      return { ...response.data, type: 'series' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getById(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?append_to_response=credits%2Cexternal_ids%2ckeywords%2cvideos%2crecommendations&language=es-AR&api_key=${KEY}`,
      )
      return { ...response.data, type: 'series' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getBySearch(query, page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/tv?query=${query}&page=${page}&include_adult=false&language=es-AR&api_key=${KEY}`,
      )
      return { ...response.data, type: 'series' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }
}
