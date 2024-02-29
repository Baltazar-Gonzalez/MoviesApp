import { useEffect, useState } from 'react'
import { useAuth } from '../context/auth'

import { Col, Row, Button } from 'antd'
import { minutesConvert } from '../utils/functions'
import { HeartOutlined, CaretRightOutlined } from '@ant-design/icons'

export function MediaInformation({ data }) {
  const { isAuthenticated, user } = useAuth()

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

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Row
        className="px-10 py-8 text-white"
        style={{
          background:
            'linear-gradient(to bottom right, rgba(0, 0, 0, .60), rgba(0, 0, 0, .45))',
        }}
      >
        <Col md={6}>
          <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} />
        </Col>
        <Col md={18}>
          <Row className="pl-10 h-full" align="middle">
            <Col md={24}>
              <Row>
                <Col md={24}>
                  <h1>{`${data.title || data.name} (${data.release_date ? data.release_date.split('-')[0] : ''})`}</h1>
                </Col>
                <Col className="mb-6 text-lg" md={24}>
                  <span>
                    {data.genres?.map((elem) => elem.name).join(', ')}
                  </span>
                  <span className="px-4">-</span>
                  <span>{`${data.runtime ? minutesConvert(data.runtime) : false}`}</span>
                </Col>
                <Col className="mb-6" md={24}>
                  <Row className="h-16 gap-4" align="middle">
                    <Col>
                      <span className="text-4xl font-extrabold text-yellow-500">
                        ⭐ {Number(data.vote_average).toFixed(1)}
                      </span>
                    </Col>
                    <Col>
                      <Button
                        className="bg-white text-red-600"
                        size="large"
                        onClick={toggleFavorite}
                        type="primary"
                        icon={<HeartOutlined />}
                      >
                        {'Agregar a favoritos'}
                      </Button>
                    </Col>
                    <Col>
                      <a
                        className="text-white text-lg"
                        href={data.homepage}
                        target="_blank"
                      >
                        <CaretRightOutlined /> Reproducir trailer
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col md={24}></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
