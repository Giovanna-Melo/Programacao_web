"use client"

import {searchMovies} from "../actions/movieActions"
import Form from "next/form"
import {useState} from "react"
import Link from "next/link"  

export default function Home(){
    const [data, setData] = useState({})
    async function handleAction(formData){
        const res = await searchMovies(formData)
        setData(res)
    }

    return (
        <div>
            <MovieForm actionHandler={handleAction}/>
            {data.Search && <MovieTable movies={data.Search}/>}
        </div>        
    )
}

export function MovieForm({actionHandler}){
    return (
        <Form action={actionHandler}>
            <label htmlFor="idTitleSearchKey">Título</label>            
            <input id="idTitleSearchKey" name="titleSearchKey"/>
            <label htmlFor="idType">Tipo</label>
            <select id="idType" name="type">
                <option value="">Todos</option>
                <option value="movie">Filme</option>
                <option value="series">Série</option>
                <option value="episode">Episódio</option>
            </select>
            <button type="submit">Pesquisar</button>
        </Form>
    )
}

export function MovieTable({movies}){
    return (
        <div>
            <div>
                {movies.map( (m) => 
                <div 
                    key={m.imdbID}>{m.Title} --- {m.Year}
                    <Link href={`/movie/${m.imdbID}`}>
                        <a className="text-blue-500 underline">
                            Ver Detalhes
                        </a>
                    </Link>
                </div>  )}               
            </div>
        </div>
    )
}