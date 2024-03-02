import { Row, Col, Flex } from 'antd'
import { SMALL_POSTER_ULR } from '../utils/constants'
import { changeDateFormat } from '../utils/functions'

export function SearchCard({ data }) {
  if (!data || !data.release_date) {
    return null
  }

  return (
    <Flex className="border-2 rounded-md bg-white">
      <img
        className="rounded-l-md"
        src={SMALL_POSTER_ULR.concat(data.poster_path)}
      />
      <Row className="px-[15px] py-[10px]" align="middle">
        <Col>
          <Row>
            <Col xs={24}>
              <span className="font-bold text-base">
                {data.title || data.name}
              </span>
            </Col>
            <Col xs={24}>
              <span>
                {changeDateFormat(data.first_air_date || data.release_date)}
              </span>
            </Col>
          </Row>
        </Col>
        <Col>
          <p className="max-h-10 overflow-hidden text-ellipsis text-nowrap">
            {data.overview}
          </p>
        </Col>
      </Row>
    </Flex>
  )
}
