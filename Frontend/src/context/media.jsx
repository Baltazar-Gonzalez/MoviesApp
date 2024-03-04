import React, { createContext, useEffect, useState } from 'react'
import { instance, endpoints } from '../API/api'
export const MediaContext = createContext()

export function MediaProvider({ children }) {
  const [moviesGenresList, setMoviesGenresList] = useState({})
  const [seriesGenresList, setSeriesGenresList] = useState({})

  //Trae y guarda en un state todos los generos de peliculas
  async function getMoviesGenres() {
    try {
      const {
        data: { genres },
      } = await instance.get(endpoints.getMoviesGenresList)

      const newMovieGenres = {}

      genres?.forEach(({ name, id }) => {
        newMovieGenres[id] = name
      })
      setMoviesGenresList(newMovieGenres)
    } catch (error) {
      console.error('Error al obtener generos:', error)
    }
  }

  //Trae y guarda en un state todos los generos de series
  async function getSeriesGenres() {
    try {
      const {
        data: { genres },
      } = await instance.get(endpoints.getSeriesGenresList)

      const newSeriesGenres = {}

      genres?.forEach(({ name, id }) => {
        newSeriesGenres[id] = name
      })
      setSeriesGenresList(newSeriesGenres)
    } catch (error) {
      console.error('Error al obtener generos:', error)
    }
  }

  useEffect(() => {
    getMoviesGenres()
    getSeriesGenres()
  }, [])

  return (
    <MediaContext.Provider value={{ moviesGenresList, seriesGenresList }}>
      {children}
    </MediaContext.Provider>
  )
}
