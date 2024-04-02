import { useEffect, useState } from 'react'
import { instance } from '../API/api'
import { ApiToUrl } from '../utils/functions'
import { Flex } from 'antd'
import { Card } from './Card'
import { FavoriteCard } from './FavoriteCard'
import { Link } from 'react-router-dom'

export function List({ title, category, favorite = false }) {
  const [list, setlist] = useState({})

  //Trae la lista de elementos segun la categoria
  useEffect(() => {
    instance
      .get(category)
      .then((response) => {
        setlist(response.data)
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [window.location.href])

  return (
    <section
      className="px-[40px] pt-[30px] text-black"
      style={{
        backgroundImage: `url(./assets/trend.svg)`,
        backgroundSize: 'auto 300px',
        backgroundPosition: 'center 140px',
        backgroundRepeat: 'repeat no-repeat',
      }}
    >
      <h1 className="py-3 text-xl font-bold">{title}</h1>
      <Flex className="overflow-x-scroll" gap="middle">
        {list?.results?.length === 0 && (
          <p className="py-6">Agrega favoritos a tu lista!</p>
        )}
        {list.results?.map((elem) => {
          return favorite ? (
            <Link
              className="mb-4"
              key={elem.id}
              to={`/${elem.type}/${elem.favId}`}
            >
              <FavoriteCard id={elem.favId} media={elem.type} />
            </Link>
          ) : (
            <Link
              key={elem.id}
              to={`/${ApiToUrl(elem.media_type || elem.type)}/${elem.id}`}
            >
              <Card
                data={elem}
                media={ApiToUrl(elem.media_type || elem.type)}
              />
            </Link>
          )
        })}
      </Flex>
    </section>
  )
}
