import './Card.css'

export function Card({data}){
    return(
        <li key={data.id} className='card'>
                <img src={`https://image.tmdb.org/t/p/w154/${data.poster_path}`}/>
                <div className='card_information'>
                    <span className='title'>{data.title || data.name}</span>
                    <p className='genre'>Genero</p>
                    <div className='card_information_div'>
                        <span>{data.first_air_date || data.release_date}</span>
                        <span className='rating'>{Number(data.vote_average).toFixed(1)}</span>
                    </div>
                </div>
        </li>
    )
}