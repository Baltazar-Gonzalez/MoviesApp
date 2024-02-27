import { useEffect, useState } from 'react'
import { instance } from "../API/api"

import { Flex } from 'antd'
import { Card } from './Card'
import { Link } from 'react-router-dom'


export function List({ title, category, media }) {
  const [list, setlist] = useState([])

  useEffect(() => {
    instance
      .get(category)
      .then((response) => {
        setlist(response.data.results)
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [])

  return (
    <section className="px-4 text-white bg-slate-800">
        <h1 className='py-3 text-xl font-bold'>{title}</h1>
        <Flex className='overflow-x-scroll' gap="middle">
          {list.map(elem => {
              return (
                  <Link className='text-white' to={`/${media}/${elem.id}`}>
                    <Card id={elem.id} media={media}/>
                  </Link>
                )
          })
          }
        </Flex>
    </section>
  )

  /*  return (
      <section className="px-4 text-white bg-slate-800">
        
      </section>
    ); */
}
