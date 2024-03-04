import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Pagination } from 'antd'
import { Card } from '../components/Card'
import { instance } from '../API/api'
import { useSearchParams } from 'react-router-dom'

export function MediaList({ category, title }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [list, setlist] = useState({})

  //Traer lista segun la categoria
  useEffect(() => {
    instance
      .get(category(searchParams.get('page')))
      .then((response) => {
        setlist(response.data)
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [window.location.href, searchParams])

  return (
    <Row className="px-[40px] pt-[30px] gap-6">
      <Col xs={24}>
        <h1>{title}</h1>
      </Col>
      <Col xs={24}>
        <Row gutter={[64, 64]} justify="center" >
          {list.results?.map((elem) => {
            return (
              <Col >
                <Link className="text-black" to={`/${list.type}/${elem.id}`}>
                  <Card data={elem} media={list.type} />
                </Link>
              </Col>
            )
          })}
        </Row>
      </Col>
      <Col xs={24} className='pb-[40px]'>
        <Row justify="center">
          <Col>
            <Pagination
            onChange={(page) => setSearchParams({ page })}
            current={list.page}
            showSizeChanger={false}
            total={list.total_pages < 500 ? list.total_pages * 10 : 5000}
          />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
