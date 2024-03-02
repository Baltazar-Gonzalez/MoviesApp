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
        setlist(response.data)
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [])
  return (
    <section
      className="px-[40px] pt-[30px] text-black"
      style={{
        backgroundImage: `url(./src/assets/trend.svg)`,
        backgroundSize: 'auto 300px',
        backgroundPosition: 'center 140px',
        backgroundRepeat: 'repeat no-repeat',
      }}
    >
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
              to={`/${elem.media_type || list.type}/${elem.id}`}
            >
              <Card data={elem} media={elem.media_type || list.type} />
            </Link>
          )
        })}
      </Flex>
    </section>
  )
}
