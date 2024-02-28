import { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { Layout, Input, Button, Menu } from 'antd';

const { Search } = Input;
const { Header } = Layout;

const items = [{
    label: 'Peliculas',
    key: 'movies',
    icon: false,
    children: [
      {
        label: (
           <Link to="/movies/popular">Populares</Link> 
        ),
        key: 'popularMovies',
      },
      {
        label: (
            <Link to="/movies/cartelera">En carteleras</Link> 
         ),
        key: 'onComing',
      },
      {
        label: (
            <Link to="/movies/proximamente">Proximamente</Link> 
         ),
        key: 'onComing',
      },
    ],
  },
  {
    label: 'Series',
    key: 'series',
    icon: false,
    children: [
      {
        label: (
           <Link to="/series/populares">Populares</Link> 
        ),
        key: 'popularSeries',
      },
      {
        label: (
           <Link to="/series/en-emision">En Emisión</Link> 
        ),
        key: 'onAir',
      },
    ],
  }
]

export function NavBar(){
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [value, setValue] = useState(searchParams.get('query') ?? '')


    function handleSubmit(searchValue){
        navigate({
            pathname: `/search`,
            search: `?query=${searchValue}`
        })
    }
        

    return(
        <Header className='flex items-center justify-between'> 
                <Link className="text-white" to="/">MediaApp</Link>
                <Menu items={items} mode="horizontal"/>
            <Search 
                onSearch={handleSubmit}
                onChange={(e) => setValue(e.target.value)}
                className='w-96' 
                placeholder="input search text" 
                enterButton 
                value={value}
            />
            <div>
                <Link to="/login"><Button type='primary' className='mr-2'>Iniciar Sesión</Button></Link>
                <Link to="/register"><Button type='default'>Registrarse</Button></Link>
            </div>
        </Header>
    )
}