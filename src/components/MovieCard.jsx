import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, onFavorite }) {
  return (
    <div className='p-4'>
        <div>
            <Link to={`/movie/${movie.id}`}>
               <img
                  className='w-full h-64 object-cover' 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
            />
            <div>
                <h3>{movie.title}</h3>
                <button 
                  className='mt-2 '
                  onClick={(e) =>{
                    e.stopPropagation();
                    onFavorite(movie);
                  }}
                >
                    Add to Favorites 
                </button>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default MovieCard