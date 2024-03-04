import { Row, Col, Flex } from 'antd'
import { Link } from 'react-router-dom'
import { SMALL_POSTER_ULR } from '../utils/constants'
import { changeDateFormat } from '../utils/functions'

export function SearchCard({ data, media }) {
  //Retorna null si no hay data
  if (!data || !data.release_date && !data.first_air_date ) {
    return null
  }

  return (
    <Flex className="border-2 rounded-md shadow-md bg-white">
        <Link to={`/${media}/${data.id}`}>
          {
            data.poster_path !== null ? (
              <img
              className="rounded-l-md"
              src={SMALL_POSTER_ULR.concat(data.poster_path)}
              />
            ) : (
              <div className="small_poster_default"></div>
              )
          }
            
        </Link>
      <Row className="px-[15px] py-[10px]" align="middle">
        <Col xs={24}>
          <Row>
            <Col xs={24}>
                <Link to={`/${media}/${data.id}`}>
                    <span className="font-bold text-base text-black">
                        {data.title || data.name}
                    </span>
                </Link>
            </Col>
            <Col xs={24}>
              <span>
                {changeDateFormat(data.first_air_date || data.release_date)}
              </span>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <p className="max-h-10 overflow-hidden text-ellipsis text-nowrap">
            {data.overview}
          </p>
        </Col>
      </Row>
    </Flex>
  )
}
