import { useEffect, useState } from 'react'
import { useAuth } from '../context/auth'
import { Col, Row, Button } from 'antd'
import { Crew } from './Crew'
import { minutesConvert } from '../utils/functions'
import { HeartOutlined, CaretRightOutlined } from '@ant-design/icons'
import { BACKDROP_URL, POSTER_URL } from '../utils/constants'

export function MediaInformation({ data }) {
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
        backgroundImage: `url(${BACKDROP_URL.concat(data.backdrop_path)})`,
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
        align="middle"
        justify="center"
      >
        <Col md={6}>
          <img className="w-80" src={POSTER_URL.concat(data.poster_path)} />
        </Col>
        <Col md={18}>
          <Row className="pl-10 mb-6">
            <Col md={24}>
              <Row>
                <Col md={24}>
                  <h1>{`${data.title || data.name} (${data.release_date ? data.release_date.split('-')[0] : data.first_air_date?.split('-')[0]})`}</h1>
                </Col>
                <Col className="mb-6 text-lg" md={24}>
                  <span>
                    {data.genres?.map((elem) => elem.name).join(', ')}
                  </span>
                  <span className="px-4">-</span>
                  <span>{`${data.runtime ? minutesConvert(data.runtime) : ``}`}</span>
                </Col>
              </Row>
            </Col>
            <Col className="" md={24}>
              <Row className="h-16 gap-4" align="middle">
                <Col>
                  <span className="text-4xl font-extrabold text-yellow-500">
                    ⭐ {Number(data.vote_average).toFixed(1)}
                  </span>
                </Col>
                <Col>
                  <Button
                    className="bg-sky-950 text-slate-100 hover:bg-sky-100 hover:text-sky-950"
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
            <Col md={24}>
              <Row>
                <Col className="my-2" md={24}>
                  <span>{data.tagline}</span>
                </Col>
                <Col>
                  <h2>Vista General</h2>
                </Col>
                <Col md={24}>
                  <p>{data.overview}</p>
                </Col>
                <Col className="mt-5" md={24}>
                  <Crew crew={data.credits?.crew} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
