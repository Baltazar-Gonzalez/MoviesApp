import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { instance, endpoints } from '../API/api'

import { Pagination } from 'antd'

export function Search() {
    const navigate = useNavigate()
    const { media = 'movies' } = useParams('media')

    const [searchParams, setSearchParams] = useSearchParams()
    const [list, setlist] = useState({})

    function handleClick(mediaType) {
        navigate({
            pathname: `/search/${mediaType}`,
            search: `?query=${searchParams.get('query')}`,
        })
    }

    useEffect(() => {
        instance
            .get(
                endpoints.getBySearch(
                    media,
                    searchParams.get('query'),
                    searchParams.get('page'),
                ),
            )
            .then((response) => {
                setlist(response.data)
            })
            .catch((error) => console.error('Error al obtener datos:', error))
    }, [searchParams, media])

    return (
        <>
            <button
                className="bg-yellow-500"
                onClick={(e) => handleClick('movies')}
            >
                Peliculas
            </button>
            <button
                className="bg-red-400"
                onClick={(e) => handleClick('series')}
            >
                Series
            </button>
            <ul>
                {list.results?.map((elem) => (
                    <li>{elem.title || elem.name}</li>
                ))}
            </ul>
            <Pagination
                onChange={(page) =>
                    setSearchParams({ query: searchParams.get('query'), page })
                }
                current={list.page}
                showSizeChanger={false}
                total={list.total_pages * 10}
            />
        </>
    )
}
