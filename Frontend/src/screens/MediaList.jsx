import { useEffect, useState } from "react"
import { Row, Col } from "antd"
import { Card } from "../components/Card"
import { instance } from "../API/api"

export function MediaList({category}){
    const [list, setlist] = useState({})

    useEffect(() => {
      instance
        .get(category)
        .then((response) => {
          setlist(response.data)
        })
        .catch((error) => console.error('Error al obtener datos:', error))
    }, [])

    return (
        <>
            <h1>Peliculas Populares</h1>
            <Row>
                    {list.results?.map(elem => {
                        return(
                            <Col xs={24} sm={12} md={6} lg={4}>
                                <Card id={elem.id} media={list.type}/>
                            </Col>
                        )
                    }
                    )}
            </Row>
        </>
    )
}