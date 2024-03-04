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

  //Navigate cuando se cambia el tipo (pelicula o serie)
  function handleClick(mediaType) {
    navigate({
      pathname: `/search/${mediaType}`,
      search: `?query=${searchParams.get('query')}`,
    })
  }

  //Realiza la busqueda en base a los parametros de la url
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
        console.log(response.data)
        setlist(response.data)
      })
      .catch((error) => console.error('Error al obtener datos:', error))
  }, [searchParams, media])

  return (
    <>
      <Flex className="px-[40px] pt-[30px]">
        <Flex className='h-56 rounded-lg bg-white' style={{border: "1px solid #dbdbdb"}} vertical>
            <div className='p-5 mb-2 rounded-t-lg bg-sky-500 text-white text-lg font-semibold'>Resultados de la busqueda</div>
            <Row className='w-[258px]'>
              <Col className='hover:bg-slate-300' xs={24}>
                <Row onClick={(e) => handleClick(MOVIES)} className='cursor-pointer px-5 py-2'>
                  <Col xs={22}>
                    <span>Peliculas</span>
                  </Col>
                  <Col xs={2}>
                    <span></span>
                  </Col>
                </Row>
              </Col>
              <Col className='hover:bg-slate-300' xs={24}>
                <Row onClick={(e) => handleClick(SERIES)} className='cursor-pointer px-5 py-2'>
                  <Col xs={22}>
                    <span>Series</span>
                  </Col>
                  <Col xs={2}>
                    <span></span>
                  </Col>
                </Row>
              </Col>
            </Row>
        </Flex>
        <Flex className="pl-[30px]" gap={20} vertical>
          {list.results?.map((elem) => {
            return <SearchCard data={elem} media={media} />
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