import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../context/auth'
import { instance, endpoints } from '../API/api'
import { Row, Col, Button } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { MediaInformation } from '../components/MediaInformation'
import { MediaSidebar } from '../components/MediaSidebar'
import { CastList } from '../components/CastList'
import { TrailerList } from '../components/TrailerList'
import { RecommendationList } from '../components/RecommendationList'

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
      <MediaInformation data={data}/>
      <Row className='px-8 py-10'>
        <Col className="after:content-[''] after:absolute after:top-0 after:right-0 after:bg-gradient-to-r after:from-transparent after:from-0% after:to-[#f5f5f5] after:to-75% after:h-full after:w-16 " md={18}>
          <Row>
            <Col md={24}>
              <CastList credits={data.credits}/>
            </Col>
            <Col md={24}>
              <TrailerList videos={data.videos}/>
            </Col>
            <Col md={24}>
              <RecommendationList recommendations={data.recommendations} media={media}/>
            </Col>
          </Row>
        </Col>
        <Col  md={6}>
          <MediaSidebar data={data}/>
        </Col>
      </Row>
      
    </>
  )
}
