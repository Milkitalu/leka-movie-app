import React, {useContext} from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';

function FavoritesPage() {

    const [favorites, removeFavorite] = useContext(FavoritesContext);
  return (
    <div>
        <h1>Favorites</h1>
        <div>
            {favorites.map( movie =>(
                <MovieCard key={movie.id} movie={movie} onFavorite={() => removeFavorite(movie.id)} />
            ))}
        </div>
    </div>
  );
};

export default FavoritesPage;
