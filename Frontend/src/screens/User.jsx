import { useEffect, useState } from 'react'
import { instance, endpoints } from '../API/api'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'antd'
import { List } from '../components/List'
import { UserInformation } from '../components/UserInformation'

export function User() {
  const [data, setData] = useState({})
  const { id } = useParams()

  //Trae la información del usuario por medio del parametro id
  useEffect(() => {
    instance
      .get(endpoints.getUserById(id))
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [window.location.href])
  return (
    <Row>
      <Col xs={24}>
        <UserInformation data={data}/>
      </Col>
      <Col className='bg-white' xs={24}>
        <List title="Favoritos" category={endpoints.getFavoritesByUserId(id)} favorite={true} />
      </Col>
    </Row>
  )
}
