import React from 'react';

export default async function Home({ params }) {
    const {id} = await params
    const movie = await fetch(`https://www.omdbapi.com/?apikey=6b8a8a20&i=${id}`).then(res => res.json())

    return (
        <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>
        </div>
    );
};

export async function generateStaticParams() {
    const allMovies = await fetch('https://www.omdbapi.com/?apikey=6b8a8a20&s=lady').then((res) => res.json())    
    return allMovies.Search.map((movie) => ({
      id: movie.imdbID,
    }))
}
