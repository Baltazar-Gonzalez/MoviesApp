import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

export function Search(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [list, setlist] = useState([]);

    function handleClick(media){
        axios.get(`http://localhost:5500/${media}/search?query=${searchParams.get("query")}`)
        .then(response => {
          setlist(response.data.results);
        })
        .catch(error => console.error('Error al obtener datos:', error));
    }
    
    useEffect(() => handleClick("movies"), [searchParams.get("query")])
  
    return (
        <>
            <button className='bg-yellow-500' onClick={e => handleClick("movies")}>Peliculas</button>
            <button className='bg-red-400' onClick={e => handleClick("series")}>Series</button>
            <ul>
                {list.map(elem => <li>{elem.title || elem.name}</li>)}
            </ul>
        </>
    )
}