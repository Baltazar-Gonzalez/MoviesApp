import { useContext } from 'react'
import { MediaContext } from '../context/media'
import { Row, Col } from 'antd'
import { MOVIES, SERIES, MOVIE, TV, CARD_URL } from '../utils/constants'

export function Card({ data, media }) {
  const { moviesGenresList = {}, seriesGenresList = {} } =
    useContext(MediaContext)
  let genreList
  if (media === MOVIES || media === MOVIE) {
    genreList = moviesGenresList
  } else if (media === TV || media === SERIES) {
    genreList = seriesGenresList
  }

  return (
    <Row key={data.id} className="min-h-[360px] content-start gap-3 text-black">
      <Col className="max-h-[225px]" md={24}>
        <img
          className="max-w-none mb-2 rounded-md"
          src={`${CARD_URL.concat(data.poster_path)}`}
        />
      </Col>
      <Col md={24}>
        <Row>
          <Col md={24}>
            <span className="font-bold">{data.title || data.name}</span>
          </Col>
          <Col md={24}>
            <p className="text-xs text-red-300">
              {`${genreList[data.genre_ids[0]]} ${genreList[data.genre_ids[1]] ?? ''}`}
            </p>
          </Col>
          <Col md={24}>
            <Row>
              <Col md={18}>
                <span>{data.first_air_date || data.release_date}</span>
              </Col>
              <Col md={6}>
                <span className="text-amber-500 font-extrabold ">
                  ⭐ {Number(data.vote_average).toFixed(1)}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
