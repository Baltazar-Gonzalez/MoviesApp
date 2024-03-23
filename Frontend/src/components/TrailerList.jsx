import { Row, Col, Flex } from 'antd'
import { YOUTUBE_TRAILER_URL } from '../utils/constants'

export function TrailerList({ videos }) {
  
  //Retorna null si no hay videos
  if (!videos) {
    return null
  }
  
  return (
    <Row className="px-4 pb-7" style={{ borderTop: '1px solid #d7d7d7' }}>
      <Col md={24}>
        <h1 className="py-3 text-xl font-bold">Trailer</h1>
      </Col>
      <Col md={24}>
        <Flex className="overflow-x-scroll pb-2">
          {videos?.results?.map((video, index) =>
            video.type === 'Trailer' ? (
              <Flex className="pr-4" key={video.id} vertical>
                <iframe
                  width="560"
                  height="315"
                  src={YOUTUBE_TRAILER_URL.concat(video.key)}
                  title={video.name}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Flex>
            ) : null,
          )}
        </Flex>
      </Col>
    </Row>
  )
}
