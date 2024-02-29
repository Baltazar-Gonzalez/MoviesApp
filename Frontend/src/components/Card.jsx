import { useContext } from 'react'
import { MediaContext } from '../context/media'

export function Card({ data, media }) {
  const { moviesGenresList = {}, seriesGenresList = {} } =
    useContext(MediaContext)
  let genreList

  if (media === 'movies') {
    genreList = moviesGenresList
  } else if (media === 'series') {
    genreList = seriesGenresList
  }

  return (
    <div key={data.id} style={{ minHeight: '360px' }}>
      <img
        className="h-56 max-w-none mb-2"
        src={`https://image.tmdb.org/t/p/w154/${data.poster_path}`}
      />
      <span className="font-bold">{data.title || data.name}</span>
      <p className="text-xs text-red-300">
        {`${genreList[data.genre_ids[0]]} ${genreList[data.genre_ids[1]] ?? ''}`}
      </p>
      <div className="flex justify-between items-center">
        <span>{data.first_air_date || data.release_date}</span>
        <span className="text-amber-500 font-extrabold ">
          ⭐ {Number(data.vote_average).toFixed(1)}
        </span>
      </div>
    </div>
  )
}
