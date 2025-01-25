import Link from "next/link" 

/* Abordagem alternativa
function transformar(elemento){
    return (<div>{elemento.Title} --- {elemento.Year}</div>) 
}*/

export default async function Home({searchParams}){
    const {titleSearchKey = 'bagdad', type = 'movie'} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=6b8a8a20&s=${titleSearchKey}&type=${type}`)
    const data = await res.json()

    return (
        <div>
            <div>
                {data.Search.map( (m) => 
                    <div key={m.imdbID}>
                        {m.Title} --- {m.Year}
                        <div>
                            <img src={m.Poster !== "N/A" ? m.Poster: "/placeholder.jpg"} alt={m.Title} width="150" />
                        </div>
                        <Link href={`/movie/${m.imdbID}`}>
                            <a className="text-blue-500 underline">
                                Ver Detalhes
                            </a>
                        </Link>
                    </div>
                )}                
            </div>
        </div>
    )
}

