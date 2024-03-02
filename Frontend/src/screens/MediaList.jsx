import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Flex, Pagination } from 'antd'
import { Card } from '../components/Card'
import { instance, endpoints } from '../API/api'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { MOVIES, SERIES } from '../utils/constants'

export function MediaList({ category, location }) {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const [list, setlist] = useState({})
  useEffect(() => {
    instance
      .get(category(searchParams.get('page')))
      .then((response) => {
        setlist(response.data)
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [window.location.href, searchParams])
  console.log(searchParams.get('page'))
  return (
    <Row className="px-[40px] pt-[30px] gap-6">
      <Col md={24}>
        <h1>Peliculas Populares</h1>
      </Col>
      <Col md={24}>
        <Row justify="center">
          {list.results?.map((elem) => {
            return (
              <Col xs={24} sm={12} md={6} lg={4}>
                <Link className="text-black" to={`/${list.type}/${elem.id}`}>
                  <Card data={elem} media={list.type} />
                </Link>
              </Col>
            )
          })}
        </Row>
      </Col>
      <Col>
        <Pagination
          onChange={(page) => setSearchParams({ page })}
          current={list.page}
          showSizeChanger={false}
          total={list.total_pages < 500 ? list.total_pages * 10 : 5000}
        />
      </Col>
    </Row>
  )
}
