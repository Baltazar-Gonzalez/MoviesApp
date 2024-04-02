import { useContext } from 'react'
import { MediaContext } from '../context/media'
import { Row, Col } from 'antd'
import { MOVIES, SERIES, MOVIE, TV, CARD_URL } from '../utils/constants'

export function Card({ data, media }) {
  //Retorna null si no hay data
  if (!data || !data.genre_ids) {
    return null
  }

  //Trae las listas de generos
  const { moviesGenresList = {}, seriesGenresList = {} } =
    useContext(MediaContext)

  //Verifica que lista de generos usar
  let genreList
  if (media === MOVIES || media === MOVIE) {
    genreList = moviesGenresList
  } else if (media === TV || media === SERIES) {
    genreList = seriesGenresList
  }

  return (
    <Row
      key={data.id}
      className="min-h-[360px] w-[150px] content-start gap-3 text-black"
    >
      {data?.poster_path ? (
        <Col className="max-h-[225px] w-full" md={24}>
          <img
            className="max-w-none mb-2 rounded-md"
            src={`${CARD_URL.concat(data.poster_path)}`}
          />
        </Col>
      ) : (
        <div className="poster_default" />
      )}

      <Col md={24}>
        <Row>
          <Col md={24}>
            <span className="font-bold">{data.title || data.name}</span>
          </Col>
          <Col md={24}>
            <p className="text-xs text-red-400">
              {`${[genreList[data.genre_ids[0]], genreList[data.genre_ids[1]]].join(' - ') ?? ''}`}
            </p>
          </Col>
          <Col md={24}>
            <Row>
              <Col md={18}>
                <span>{data.first_air_date || data.release_date}</span>
              </Col>
              <Col md={6}>
                {data.vote_average !== 0 ? (
                  <span className="text-amber-500 font-extrabold ">
                    ⭐ {Number(data.vote_average).toFixed(1)}
                  </span>
                ) : (
                  <span className="text-gray-500 font-extrabold ">NR</span>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
