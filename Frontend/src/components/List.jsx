import { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios';
import './List.css'

export function List({title, url}){
    const [list, setlist] = useState([]);

    useEffect(() => {
      axios.get(url)
        .then(response => {
          // Mapea los resultados y actualiza el estado de la película
          setlist(response.data.results);
        })
        .catch(error => console.error('Error al obtener datos:', error));
    }, [])
  
    return (
      <section className="list">
        <h1>{title}</h1>
        <ul className='list_ul'>
        {list.map(elem => (
            <Card data={elem}/>
        ))}
        </ul>
      </section>
    );
}