import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import { Card } from '../components/Card'
import { instance } from '../API/api'

export function MediaList({ category }) {
  const [list, setlist] = useState({})

  useEffect(() => {
    instance
      .get(category)
      .then((response) => {
        setlist(response.data)
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [list])
  console.log(list)

  return (
    <>
      <h1>Peliculas Populares</h1>
      <Row>
        {list.results?.map((elem) => {
          console.log(elem)
          return (
            <Col xs={24} sm={12} md={6} lg={4}>
              <Link className="text-black" to={`/${list.type}/${elem.id}`}>
                <Card data={elem} media={list.type} />
              </Link>
            </Col>
          )
        })}
      </Row>
    </>
  )
}
