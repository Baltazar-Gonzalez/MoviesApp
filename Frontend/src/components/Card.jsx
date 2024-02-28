export function Card({ data }) {
    return (
        <div key={data.id} style={{ minHeight: '360px' }}>
            <img
                className="h-56 max-w-none mb-2"
                src={`https://image.tmdb.org/t/p/w154/${data.poster_path}`}
            />
            <span className="font-bold">{data.title || data.name}</span>
            <p className="text-xs text-red-300">
                {data.genres?.map((elem) => `${elem.name} - `)}
            </p>
            <div className="flex justify-between items-center">
                <span>{data.first_air_date || data.release_date}</span>
                <span className="text-amber-500 font-extrabold ">
                    ⭐ {Number(data.vote_average).toFixed(1)}
                </span>
            </div>
        </div>
    )
}
