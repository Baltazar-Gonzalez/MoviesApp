import axios from 'axios'
const KEY = process.env.KEY //Llave de la API (https://www.themoviedb.org/)

export class MovieModel {
  static async getPopulars(page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?page=${page}&language=es-AR&api_key=${KEY}`,
      )
      return { ...response.data, type: 'movies' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getNowPlaying(page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?page=${page}&language=es-AR&api_key=${KEY}`,
      )
      return { ...response.data, type: 'movies' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getUpcoming(page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?page=${page}&language=es-AR&region=AR&api_key=${KEY}`,
      )
      return { ...response.data, type: 'movies' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getAnimationMovies(page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?page=${page}&language=es-AR&sort_by=popularity.desc&with_genres=16&api_key=${KEY}`,
      )
      return { ...response.data, type: 'movies' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getTrendingList(page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?page=${page}&language=es-AR&api_key=${KEY}`,
      )
      return { ...response.data }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getMoviesGenresList() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=${KEY}`,
      )
      return { ...response.data, type: 'movies' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getById(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits%2Cexternal_ids%2ckeywords%2Crecommendations&language=es-AR&api_key=${KEY}`,
      )
      const videos = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${KEY}`,
      )
      return { ...response.data, videos: { ...videos.data }, type: 'movies' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }

  static async getBySearch(query, page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&include_adult=false&language=es-AR&api_key=${KEY}`,
      )
      return { ...response.data, type: 'movies' }
    } catch (error) {
      console.error('Error al obtener datos:', error)
      throw new Error('Error al obtener datos')
    }
  }
}
