import { Row, Col } from 'antd'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { FACEBOOK_URL, TWITTER_URL, INSTAGRAM_URL } from '../utils/constants'
import { numberWithCommas } from '../utils/functions'

export function MediaSidebar({ data }) {
  //Retorna null si no hay data
  if (!data || !data.external_ids || !data.keywords) {
    return null
  }

  //Extrae los ids de las redes sociales
  const { facebook_id, instagram_id, twitter_id } = data.external_ids

  return (
    <Row>
      <Col xs={24} className="mb-7">
        <Row>
          {facebook_id && (
            <Col>
              <a
                className="text-sky-950 text-2xl"
                href={FACEBOOK_URL.concat(facebook_id)}
                target="_blank"
              >
                <FaFacebook className="rounded" />
              </a>
            </Col>
          )}
          {twitter_id && (
            <Col>
              <a
                className="text-sky-950 text-2xl ml-3"
                href={TWITTER_URL.concat(twitter_id)}
                target="_blank"
              >
                <FaXTwitter />
              </a>
            </Col>
          )}
          {instagram_id && (
            <Col>
              <a
                className="text-sky-950 text-2xl ml-3"
                href={INSTAGRAM_URL.concat(instagram_id)}
                target="_blank"
              >
                <FaInstagram />
              </a>
            </Col>
          )}
        </Row>
      </Col>
      <Col className="mb-7">
        <Row>
          <Col className="mb-5" xs={24}>
            <Row>
              <Col xs={24}>
                <span className="font-bold">Estado</span>
              </Col>
              <Col>
                <span>
                  {data.status === 'Released' && 'Estrenada'}
                  {data.status === 'Post Production' && 'Posproducción'}
                  {data.status === 'Planned' && 'Programada'}
                </span>
              </Col>
            </Row>
          </Col>
          <Col className="mb-5" xs={24}>
            <Row>
              <Col xs={24}>
                <span className="font-bold">Idioma original</span>
              </Col>
              <Col>
                <span>
                  {data.original_language === 'en' && 'Inglés'}
                  {data.original_language === 'es' && 'Español'}
                </span>
              </Col>
            </Row>
          </Col>
          <Col className="mb-5" xs={24}>
            <Row>
              <Col xs={24}>
                <span className="font-bold">Presupuesto</span>
              </Col>
              <Col>
                <span>
                  {data.budget ? numberWithCommas(data.budget) : null}
                </span>
              </Col>
            </Row>
          </Col>
          <Col md={24}>
            <Row>
              <Col md={24}>
                <span className="font-bold">Ingresos</span>
              </Col>
              <Col>
                <span>
                  {data.revenue ? numberWithCommas(data.revenue) : null}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col md={24}>
        <Row>
          <Col className="mb-2" md={24}>
            <span className="font-bold">Palabras clave</span>
          </Col>
          <Col md={24}>
            <Row className="gap-2">
              {data.keywords.keywords?.length > 0
                ? data.keywords.keywords?.map((key) => (
                    <Col className="bg-slate-200 text-xs px-3 py-1 rounded">
                      {key.name}
                    </Col>
                  ))
                : 'No se han añadido palabras clave.'}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
