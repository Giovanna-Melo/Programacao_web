"use client"

import Form from "next/form"
import {useState} from "react"

export default function Home() {
    const [resultMovies, setResultMovies] = useState([])
    const [titleSearchKey, setTitleSearchKey] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleAction(formData){
        setLoading(true)
        const titleSearchKey = formData.get("titleSearchKey")
        setTimeout(async () => {
            const httpRes = await fetch(`/api/searchMovies?titleSearchKey=${titleSearchKey}`)
            const jsonRes = await httpRes.json()
            setResultMovies(jsonRes.Search || [])
            setLoading(false)
        }, 2000)
    }

    return (
        <div className="container mx-auto p-4">
            <MovieForm handleAction={handleAction} titleSearchKey={titleSearchKey} setTitleSearchKey={setTitleSearchKey} loading={loading}/>
            <MovieTable movies={resultMovies}/>
        </div>
    )
}

export function MovieForm({ handleAction, titleSearchKey, setTitleSearchKey, loading }) {
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleAction(new FormData(event.target.form));
        }
    }
    return (
        <Form action={handleAction} className="mb-4">
            <label htmlFor="idTitleSearchKey">Título</label>            
            <input 
                id="idTitleSearchKey" 
                name="titleSearchKey" 
                value={titleSearchKey}
                onChange={(e) => setTitleSearchKey(e.target.value)}
                className="mt-2 p-2 w-full border rounded-md shadow-sm"
                onKeyDown={handleKeyDown}/>
            <button 
                type="submit" 
                disabled={loading}
                className={`px-4 py-2 mt-2 text-white font-semibold rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} transition-colors`}
            >Pesquisar</button> 
        </Form>
    )
}

export function MovieTable({ movies }) {
    return (
        <div className="mt-6">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-left">Título</th>
                        <th className="px-4 py-2 text-left">Ano</th>
                        <th className="px-4 py-2 text-left">Poster</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.imdbID} className="border-b hover:bg-gray-100">
                            <td className="px-4 py-2">{m.Title}</td>
                            <td className="px-4 py-2">{m.Year}</td>
                            <td className="px-4 py-2">
                                {m.Poster !== "N/A" && (
                                    <img src={m.Poster} alt={m.Title} className="w-20 h-auto" />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
