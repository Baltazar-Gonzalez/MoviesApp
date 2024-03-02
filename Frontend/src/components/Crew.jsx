import { Col, Row } from 'antd'
import { SELECTED_JOBS } from '../utils/constants'

export function Crew({ crew = [] }) {
  const seenPersons = {}
  const sortedCrew = crew
    .filter((elem) => SELECTED_JOBS.includes(elem.job))
    .sort((a, b) => SELECTED_JOBS.indexOf(a.job) - SELECTED_JOBS.indexOf(b.job))

  return (
    <Row gutter={[0, 16]}>
      {sortedCrew.map((elem) => {
        if (seenPersons[elem.name]) {
          return null
        }
        seenPersons[elem.name] = true
        const crewList = sortedCrew
          .filter((person) => person.name === elem.name)
          .map((person) => person.job)
          .join(', ')
        return (
          <Col key={elem.name} md={8}>
            <Row>
              <Col md={24}>
                <span className="font-bold">{elem.name}</span>
              </Col>
              <Col md={24}>
                <span>{crewList}</span>
              </Col>
            </Row>
          </Col>
        )
      })}
    </Row>
  )
}
