import React, { useState } from 'react';
import useFetch from '../customHooks/useFetch';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

function MovieList({ category, onFavorite }) {

    const API_KEY = 'ac27197c2bbddbd30cca82451ddd6fcf';
    const [currentPage, setCurrentPage] = useState(1); //sets initial page number to one. 

    // destructure result of data fetching 
    const { data, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=${currentPage}`);


    if(loading) return <p> Loading....</p> ;
    if(error) return <p>Movie Fetching Eror </p>;

    const totalPages = data.total_pages ;  // to hold data of total pages of movie lists.
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.results.map(movie =>(
                <MovieCard key = {movie.id} movie={movie} onFavorite={onFavorite} />
            ))}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default MovieList;
