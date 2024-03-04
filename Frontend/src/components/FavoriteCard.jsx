import { useEffect, useState } from 'react'
import { instance, endpoints } from '../API/api'
import { MOVIES, SERIES, CARD_URL } from '../utils/constants'
import { Row, Col } from 'antd'

export function FavoriteCard({ id, media }) {
  const [data, setData] = useState({})

  //Trae la información del favorito
  useEffect(() => {
    let endpoint = ''
    if (media === MOVIES) {
      endpoint = endpoints.getMovieById(id)
    } else if (media === SERIES) {
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
      <Row key={data.id} className="w-[152px] min-h-[325px] rounded-lg shadow-lg content-start gap-3 text-black" style={{border: "1px solid #dbdbdb"}}>
        <Col className="max-h-[225px]" md={24}>
          <img
            className="max-w-none mb-2 rounded-t-lg"
            src={`${CARD_URL.concat(data.poster_path)}`}
          />
        </Col>
        <Col className='px-[10px] py-[8px]' md={24}>
          <Row>
            <Col md={24}>
              <span className="font-bold">{data.title || data.name}</span>
            </Col>
            <Col md={24}>
                  <span className="text-amber-500 font-extrabold ">
                    ⭐ {Number(data.vote_average).toFixed(1)}
                  </span>
            </Col>
          </Row>
        </Col>
      </Row>
  )
}

/*

<div key={data.id} className="min-h-[360px]">
      <img
        className="h-56 max-w-none mb-2"
        src={CARD_URL.concat(data.poster_path)}
      />
      <span className="font-bold">{data.title || data.name}</span>
      <p className="text-xs text-red-300">
        {data.genres?.map((elem) => `${elem.name} - `)}
      </p>
      <div className="flex justify-between items-center">
        <span>{data.first_air_date || data.release_date}</span>
        <span className="text-amber-500 font-extrabold ">
          ⭐ {Number(data.vote_average).toFixed(1)}
        </span>
      </div>
    </div>

  */