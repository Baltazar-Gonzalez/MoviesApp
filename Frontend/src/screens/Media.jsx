import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export function Media() {
    const [data, setData] = useState({})
    const { media, id } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:5500/${media}/${id}`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.error('Error al obtener datos:', error))
    }, [])
    return (
        <>
            <img
                className=""
                src={`https://image.tmdb.org/t/p/w154/${data.poster_path}`}
            />
            <img
                className=""
                src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            />
            <h1>
                {data.title} ⭐ {Number(data.vote_average).toFixed(1)}
            </h1>
            <span>{data.release_date}</span>
            <p>{data.overview}</p>
            <ul>
                {data.genres?.map((elem) => (
                    <li className="text-green-400">{elem.name}</li>
                ))}
            </ul>
            <ul className="overflow-x-scroll flex gap-4">
                <h1>Reparto</h1>
                {data.credits?.cast?.map((elem, index) =>
                    index < 10 ? (
                        <li className="text-green-400">
                            <img
                                src={`https://image.tmdb.org/t/p/w154/${elem.profile_path}`}
                            />
                            {elem.name}
                        </li>
                    ) : (
                        false
                    ),
                )}
            </ul>
            <ul className="overflow-x-scroll flex gap-4">
                <h1>Companias productoras</h1>
                {data.production_companies?.map((elem, index) =>
                    index < 3 ? (
                        <li>
                            <img
                                src={`https://image.tmdb.org/t/p/w154/${elem.logo_path}`}
                            />
                            {elem.name}
                        </li>
                    ) : (
                        false
                    ),
                )}
            </ul>
        </>
    )
}
