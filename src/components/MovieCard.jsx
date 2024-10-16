import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie, onFavorite }) {
  return (
    <div className='p-4'>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to={`/movie/${movie.id}`}>
               <img
                  className="w-full h-64 object-cover "
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
            />
            <div className='p-4'>
                <h3 className='text-lg font-semibold'>{movie.title}</h3>
                <button 
                  className='mt-2 text-blue-500'
                  onClick={(e) => {
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