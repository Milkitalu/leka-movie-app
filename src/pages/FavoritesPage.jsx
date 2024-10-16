import React, {useContext} from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';

function FavoritesPage() {

    const [favorites, removeFavorite] = useContext(FavoritesContext);
  return (
    <div>
        <h1 className="text-3xl font-bold">Favorites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites.map( movie =>(
                <MovieCard key={movie.id} movie={movie} onFavorite={() => removeFavorite(movie.id)} />
            ))}
        </div>
    </div>
  );
};

export default FavoritesPage;
