import { Col, Row } from 'antd'


export function Crew({ crew = [] }) {
    const selectedJobs = ["Director", "Writer", "Novel", "Characters", "Screenplay"];
    const seenPersons = {};

    const sortedCrew = crew
        .filter(elem => selectedJobs.includes(elem.job))
        .sort((a, b) => selectedJobs.indexOf(a.job) - selectedJobs.indexOf(b.job));

    return (
        <Row>
            {sortedCrew.map(elem => {
                if (seenPersons[elem.name]) {
                    return null;
                }
                seenPersons[elem.name] = true;
                return (
                    <Col key={elem.name} md={8}>
                        <Row>
                            <Col md={24}>
                                <span className='font-bold'>{elem.name}</span>
                            </Col>
                            <Col md={24}>
                                <span>
                                    {
                                        sortedCrew
                                        .filter(person => person.name === elem.name)
                                        .map(person => person.job)
                                        .join(", ")
                                    }
                                </span>
                            </Col>
                        </Row>
                    </Col>
                );
            })}
        </Row>
    )
}