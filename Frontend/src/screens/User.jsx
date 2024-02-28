import { useEffect, useState } from 'react'
import { instance, endpoints } from '../API/api'
import { useParams } from 'react-router-dom'

import { List } from '../components/List'

export function User() {
    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        instance
            .get(endpoints.getUserById(id))
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.error('Error al obtener datos:', error))
    }, [])

    return (
        <>
            <h1>{data.name}</h1>
            <List
                title="Favoritos"
                category={endpoints.getFavoriteByUserId(id)}
                favorite={true}
            />
        </>
    )
}
