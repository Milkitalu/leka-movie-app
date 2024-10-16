import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
  return (
    <div className='p-4'>
        <div>
            <Link to={`/movie/${movie.id}`}>
               <img
                  className='' 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
            />
            <div>
                <h3>{movie.title}</h3>
                <button className='mt-2 '>
                    Add to Favorites 
                </button>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default MovieCard