import { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { Layout, Input, Button } from 'antd';

const { Search } = Input;
const { Header } = Layout;

export function NavBar(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [value, setValue] = useState(searchParams.get('query') ?? '')
    const navigate = useNavigate()

    const handleSubmit = (searchValue) => navigate(`/search?query=${searchValue}`)

    return(
        <Header className='flex items-center justify-between'>
            <Link className="text-white" to="/">MediaApp</Link>
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