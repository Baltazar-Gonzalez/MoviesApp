import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../context/auth'
import { instance, endpoints } from '../API/api'
import { Button } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { MediaInformation } from '../components/MediaInformation'

export function Media({ media }) {
  const [data, setData] = useState({})
  const [favorite, setFavorite] = useState(false)
  const { isAuthenticated, user } = useAuth()
  const { id } = useParams()

  function toggleFavorite() {
    instance
      .post(endpoints.postFavorite, {
        id: 1,
        favId: id,
        type: media,
        userId: userId,
      })
      .then((response) => {
        console.log('Agregado a favoritos')
      })
      .catch((error) => console.error('Error al agregar en favoritos:', error))
  }

  useEffect(() => {
    let endpoint = ''
    if (media === 'movies') {
      endpoint = endpoints.getMovieById(id)
    } else if (media === 'series') {
      endpoint = endpoints.getSerieById(id)
    }
    instance
      .get(endpoint)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [id])

  return (
    <>
      <MediaInformation data={data} />
      <img
        className=""
        src={`https://image.tmdb.org/t/p/w154/${data.poster_path}`}
      />
      <img
        className=""
        src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
      />
      <h1>
        {data.title} ⭐ {Number(data.vote_average).toFixed(1)}
      </h1>
      <span>{data.release_date}</span>
      <p>{data.overview}</p>
      <ul>
        {data.genres?.map((elem) => (
          <li className="text-green-400 w-36">{elem.name}</li>
        ))}
      </ul>
      <Button
        className="bg-white border-red-600 text-red-600"
        onClick={toggleFavorite}
        type="primary"
        shape="circle"
        icon={<HeartOutlined />}
      />
      <ul className="overflow-x-scroll flex gap-4">
        <h1>Reparto</h1>
        {data.credits?.cast?.map((elem, index) =>
          index < 10 ? (
            <li className="text-green-400 w-36">
              <img
                src={`https://image.tmdb.org/t/p/w154/${elem.profile_path}`}
              />
              {elem.name}
            </li>
          ) : (
            false
          ),
        )}
      </ul>
      <ul className="overflow-x-scroll flex gap-4">
        <h1>Companias productoras</h1>
        {data.production_companies?.map((elem, index) =>
          index < 3 ? (
            <li className="w-36">
              <img src={`https://image.tmdb.org/t/p/w154/${elem.logo_path}`} />
              {elem.name}
            </li>
          ) : (
            false
          ),
        )}
      </ul>
    </>
  )
}
