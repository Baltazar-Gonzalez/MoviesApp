import { useEffect, useState } from 'react'
import { Card } from './Card'
import { Link } from 'react-router-dom';
import axios from 'axios';

export function List({title, url, media}){
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
      <section className="px-4 text-white bg-slate-800">
        <h1 className='py-3 text-xl font-bold'>{title}</h1>
        <ul className='overflow-x-scroll flex gap-4'>
        {list.map(elem => {
            return (
                <Link to={`/${media}/${elem.id}`}>
                  <Card id={elem.id} media={media}/>
                </Link>
              )
        })
        }
        </ul>
      </section>
    );
}