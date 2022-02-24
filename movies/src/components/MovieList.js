import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies,search,searchRate}) => {
    
    const x = movies.filter(movie => movie.title.toUpperCase().includes(search.toUpperCase()) && movie.rate >= searchRate).map(movie => <MovieCard key={movie.id} movie={movie}/>)
    return (
        <div className = "MovieList">
        {
               x.length ?   x : <h1>Not Found</h1>
            }
            
           
        </div>
    )
};
export default MovieList;