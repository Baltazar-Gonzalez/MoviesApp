import { useEffect, useState } from 'react'
import { instance } from '../API/api'

import { Flex } from 'antd'
import { Card } from './Card'
import { FavoriteCard } from './FavoriteCard'
import { Link } from 'react-router-dom'

export function List({ title, category, favorite = false }) {
    const [list, setlist] = useState({})

    useEffect(() => {
        instance
            .get(category)
            .then((response) => {
                console.log(response.data)
                setlist(response.data)
            })
            .catch((error) => console.error('Error al obtener datos:', error))
    }, [])
    return (
        <section className="px-4 text-white bg-slate-800">
            <h1 className="py-3 text-xl font-bold">{title}</h1>
            <Flex className="overflow-x-scroll" gap="middle">
                {list.results?.map((elem) => {
                    return favorite ? (
                        <Link
                            key={elem.id}
                            className="text-white"
                            to={`/${elem.type}/${elem.favId}`}
                        >
                            <FavoriteCard id={elem.favId} media={elem.type} />
                        </Link>
                    ) : (
                        <Link
                            key={elem.id}
                            className="text-white"
                            to={`/${list.type}/${elem.id}`}
                        >
                            <Card data={elem} />
                        </Link>
                    )
                })}
            </Flex>
        </section>
    )
}
