import { Row, Col, Flex } from 'antd'
import { Link } from 'react-router-dom'
import { SMALL_BACKDROP_ULR } from '../utils/constants'

export function RecommendationList({ recommendations, media }) {
  //Retorna null si no hay recomendaciones
  if (!recommendations) {
    return null
  }

  return (
    <Row className="px-4 pb-7" style={{ borderTop: '1px solid #d7d7d7' }}>
      <Col md={24}>
        <h1 className="py-3 text-xl font-bold">Recomendaciones</h1>
      </Col>
      <Col md={24}>
        <Flex className="overflow-x-scroll pb-2">
          {recommendations.results?.map((recommend, index) =>
            index < 10 ? (
              <Flex className="pr-4" key={recommend.id} vertical>
                <Link
                  className="text-black"
                  to={`/${media}/${recommend.id}`}
                  preventScrollReset={false}
                >
                  {recommend.backdrop_path ? (
                    <img
                      className="rounded-lg"
                      src={SMALL_BACKDROP_ULR.concat(recommend.backdrop_path)}
                    />
                  ):(
                    <div className='small_backdrop_default' />
                  )
                }
                  <Row>
                    <Col md={18}>
                      <span>{recommend.title || recommend.name}</span>
                    </Col>
                    <Col md={6}>
                      {
                        recommend.vote_average !== 0 ?(
                          <span className="text-amber-500 font-extrabold ">
                            ⭐ {Number(recommend.vote_average).toFixed(1)} 
                          </span>
                        ):(
                          <span className="text-gray-500 font-extrabold ">
                            NR
                          </span>
                        )
                      }
                    </Col>
                  </Row>
                </Link>
              </Flex>
            ) : null,
          )}
        </Flex>
      </Col>
    </Row>
  )
}
