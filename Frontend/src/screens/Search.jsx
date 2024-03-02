import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { instance, endpoints } from '../API/api'
import { MOVIES, SERIES } from '../utils/constants'
import { SearchCard } from '../components/SearchCard'
import { Row, Col, Flex, Pagination } from 'antd'

export function Search() {
  const navigate = useNavigate()
  const { media = MOVIES } = useParams('media')

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
      <Flex className="px-[40px] pt-[30px]">
        <div className="w-[250px] bg-slate-500">Hola</div>
        <Flex className="pl-[30px]" gap={20} vertical>
          {list.results?.map((elem) => {
            return <SearchCard data={elem} />
          })}
        </Flex>
      </Flex>
      <Pagination
        onChange={(page) =>
          setSearchParams({ query: searchParams.get('query'), page })
        }
        current={list.page}
        showSizeChanger={false}
        total={list.total_pages < 500 ? list.total_pages * 10 : 5000}
      />
    </>
  )
}

/*
 <>
      <button className="bg-yellow-500" onClick={(e) => handleClick(MOVIES)}>
        Peliculas
      </button>
      <button className="bg-red-400" onClick={(e) => handleClick(SERIES)}>
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
        total={list.total_pages < 500 ? list.total_pages * 10 : 5000}/>
    </>
*/
