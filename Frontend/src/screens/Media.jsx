import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance, endpoints } from '../API/api'
import { Row, Col, Button } from 'antd'
import { MOVIES, SERIES } from '../utils/constants'
import { MediaInformation } from '../components/MediaInformation'
import { MediaSidebar } from '../components/MediaSidebar'
import { CastList } from '../components/CastList'
import { TrailerList } from '../components/TrailerList'
import { RecommendationList } from '../components/RecommendationList'

export function Media({ media }) {
  const [data, setData] = useState({})
  const { id } = useParams()

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
    <>
      <MediaInformation data={data}/>
      <Row className='px-8 py-10 flex-col-reverse md:flex-row'>
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
