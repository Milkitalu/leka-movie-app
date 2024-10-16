import React from 'react'
import MovieList from './MovieList'

function HomePage() {
  return (
    <div>
        <MovieList category="popular"  />
    </div>
  )
}

export default HomePage