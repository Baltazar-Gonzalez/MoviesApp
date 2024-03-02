import { Row, Col, Flex } from 'antd'
import { CAST_URL } from '../utils/constants'

export function CastList({ credits }) {
  if (!credits || !credits.cast) {
    return null
  }
  return (
    <Row className="px-4 pb-7 ">
      <Col md={24}>
        <h1 className="py-3 text-xl font-bold">Reparto Principal</h1>
      </Col>
      <Col md={24}>
        <Flex className="overflow-x-scroll pb-2">
          {credits.cast?.map((actor, index) =>
            index < 20 ? (
              <Flex
                key={actor.id}
                className="w-36 min-h-64 bg-white rounded-lg my-2 ml-2 mr-1 pb-2 shadow-lg"
                vertical
              >
                {actor.profile_path !== null ? (
                  <img
                    className="rounded object-cover profile_picture"
                    src={CAST_URL.concat(actor.profile_path)}
                    alt={actor.name}
                  />
                ) : (
                  <div className="profile_default"></div>
                )}
                <div className="px-2 pt-2">
                  <span className="text-base font-bold">{actor.name}</span>
                  <p className="text-xs">{actor.character}</p>
                </div>
              </Flex>
            ) : null,
          )}
        </Flex>
      </Col>
    </Row>
  )
}
