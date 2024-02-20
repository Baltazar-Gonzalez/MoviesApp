import axios from "axios";
import KEY from "../config.js";

export class MovieModel {
    static async getPopulars() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=es-AR&api_key=${KEY}`);
        return response.data;
      } catch (error) {
        console.error('Error al obtener datos:', error);
        throw new Error('Error al obtener datos');
      }
    }

    static async getNowPlaying() {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=es-AR&api_key=${KEY}`);
          return response.data;
        } catch (error) {
          console.error('Error al obtener datos:', error);
          throw new Error('Error al obtener datos');
        }
      }

    static async getAnimationMovies() {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?language=es-AR&sort_by=popularity.desc&with_genres=16&api_key=${KEY}`);
          return response.data;
        } catch (error) {
          console.error('Error al obtener datos:', error);
          throw new Error('Error al obtener datos');
        }
      }
  }