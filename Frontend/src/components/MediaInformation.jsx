import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { instance, endpoints } from '../API/api'
import { useAuth } from '../context/auth'
import { Col, Row, Button, notification } from 'antd'
import { Crew } from './Crew'
import { minutesConvert } from '../utils/functions'
import {
  HeartOutlined,
  HeartFilled,
  CaretRightOutlined,
} from '@ant-design/icons'
import { BACKDROP_URL, POSTER_URL } from '../utils/constants'

export function MediaInformation({ data }) {
  const [favorite, setFavorite] = useState(false)
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [api, contextHolder] = notification.useNotification()

  //Configuración de las notificaciones
  const openNotificationWithIcon = (type, message = 'Parametros invalidos') => {
    api[type]({
      message,
    })
  }

  //Agrega favorito al usuario
  function addFavorite() {
    instance
      .post(endpoints.postFavorite, {
        favId: data.id,
        type: data.type,
        userId: user.id,
      })
      .then((response) => {
        openNotificationWithIcon('success', response.data.message)
        setFavorite(true)
      })
      .catch((error) => console.error('Error al agregar en favoritos:', error))
  }

  //Elimina favorito del usuario
  function deleteFavorite() {
    instance
      .get(endpoints.deleteFavoriteByUserId(user?.id, data?.id))
      .then((response) => {
        openNotificationWithIcon('error', response.data.message)
        setFavorite(false)
      })
      .catch((error) => console.error('Error al eliminar de favoritos:', error))
  }

  //Verifica si es favorito del usuario
  useEffect(() => {
    if (user !== null) {
      instance
        .get(endpoints.getIsUserFavorite(user?.id, data?.id))
        .then((response) => {
          setFavorite(true)
        })
        .catch((error) => setFavorite(false))
    }
  }, [data, user])

  return (
    <div
      style={{
        backgroundImage: `url(${BACKDROP_URL.concat(data.backdrop_path)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {contextHolder}
      <Row
        className="px-10 py-8 text-white"
        style={{
          background:
            'linear-gradient(to bottom right, rgba(0, 0, 0, .60), rgba(0, 0, 0, .45))',
        }}
        align="middle"
        justify="center"
      >
        <Col md={8} lg={6}>
          <img
            className="w-64 lg:w-72 xl:w-80"
            src={POSTER_URL.concat(data.poster_path)}
          />
        </Col>
        <Col md={16} lg={18}>
          <Row className="md:pl-10 mb-6">
            <Col xs={24}>
              <Row>
                <Col xs={24}>
                  <h1>{`${(data?.title || data?.name) ?? ''} (${(data?.release_date ? data?.release_date.split('-')[0] : data?.first_air_date?.split('-')[0]) ?? ''})`}</h1>
                </Col>
                <Col className="mb-6 text-lg" xs={24}>
                  <span>
                    {data.genres?.map((elem) => elem.name).join(', ')}
                  </span>
                  <span className="px-4">-</span>
                  <span>{`${data.runtime ? minutesConvert(data.runtime) : ``}`}</span>
                </Col>
              </Row>
            </Col>
            <Col className="" xs={24}>
              <Row className="md:h-16 gap-4" align="middle">
                <Col>
                  {data.vote_average !== 0 ? (
                    <span className="text-4xl text-amber-500 font-extrabold ">
                      ⭐ {Number(data.vote_average).toFixed(1)}
                    </span>
                  ) : (
                    <span className="text-4xl text-gray-400 font-extrabold ">
                      NR
                    </span>
                  )}
                </Col>
                <Col>
                  {favorite ? (
                    <Button
                      className="bg-sky-100 text-sky-950 hover:bg-red-700 hover:text-white"
                      size="large"
                      onClick={deleteFavorite}
                      type="primary"
                      icon={<HeartFilled />}
                    >
                      {'Eliminar de favoritos'}
                    </Button>
                  ) : (
                    <Button
                      className="bg-sky-950 text-slate-100 hover:bg-sky-100 hover:text-sky-950"
                      size="large"
                      onClick={
                        isAuthenticated()
                          ? addFavorite
                          : (e) => navigate('/login')
                      }
                      type="primary"
                      icon={<HeartOutlined />}
                    >
                      {'Agregar a favoritos'}
                    </Button>
                  )}
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
            <Col xs={24}>
              <Row>
                <Col className="my-2" xs={24}>
                  <span className="italic text-base">{data.tagline}</span>
                </Col>
                <Col>
                  <h2>Vista General</h2>
                </Col>
                <Col xs={24}>
                  <p>{data.overview}</p>
                </Col>
                <Col className="mt-5" xs={24}>
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
