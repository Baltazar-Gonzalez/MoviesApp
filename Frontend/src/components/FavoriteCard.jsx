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

   //Retorna null si no hay data
  if (!data.id) {
    return null
  }

  return (
    <Row key={data.id} className="min-h-[300px] w-[150px] content-start gap-3 text-black">
      {
        data?.poster_path ? (
          <Col className="max-h-[225px] w-full" md={24}>
            <img
              className="max-w-none mb-2 rounded-md"
              src={`${CARD_URL.concat(data.poster_path)}`}
            />
          </Col>
        ):(
          <div className='poster_default'/>
        )
      }
      <Col md={24}>
        <Row>
          <Col md={24}>
            <span className="font-bold">{data.title || data.name}</span>
          </Col>
          <Col md={24}>
            <Row>
              <Col md={18}>
                <span>{data.first_air_date || data.release_date}</span>
              </Col>
              <Col md={6}>
                {
                    data.vote_average !== 0 ?(
                      <span className="text-amber-500 font-extrabold ">
                        ⭐ {Number(data.vote_average).toFixed(1)} 
                      </span>
                    ):(
                      <span className="text-gray-500 font-extrabold ">
                        NR
                      </span>
                    )
                  }
              </Col>
            </Row>
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