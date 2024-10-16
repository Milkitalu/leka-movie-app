import React, { useContext } from 'react'
import MovieList from '../components/MovieList'
import {FavoritesContext} from '../context/FavoritesContext';

function HomePage() {

  const {addFavorite}  = useContext(FavoritesContext);
  return (
    <div>
        <h2 className="text-3xl font-bold">Leka Movies</h2>
        <h2 className="text-2xl mt-4">Popular Movies</h2>
        <MovieList category='popular' onFavorite={addFavorite} />
        <h2 className="text-2xl mt-4">Top Rated Movies</h2>
        <MovieList category='top_rated' onFavorite={addFavorite} />
        <h2 className="text-2xl mt-4">Upcoming  Movies</h2>
        <MovieList category='upcoming' onFavorite={addFavorite} />
    </div>
  )
}

export default HomePage;
