
import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {

    const [favorites, setFavorites] = useState (() => {
        // returns content of local storage array or empty array.
        return JSON.parse(localStorage.getItem('favorites')) || [];
    });

    useEffect(() => {
        //to push selected items to local storage(localcache)
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    
    // used to update state and array of favourite movies when user adds movie to favorite.
    const addFavorite = (movie) => {
        setFavorites(prev => [...prev, movie]);
    };

    // used to update state and array of favourite movies when user deletes movie from favorite list.
    const removeFavorite = (id) => {
        setFavorites(prev => prev.filter(movie => movie.id !== id));
    };
    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite }} >
            {children}
        </FavoritesContext.Provider>
    );
};
