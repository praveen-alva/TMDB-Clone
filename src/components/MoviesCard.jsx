import React from 'react'

const MoviesCard = ({ movie, handleAddtoWatchlist, handleRemoveWatchlist, watchlist, onSelectMovie }) => {
  const isInWatchlist = watchlist.some(m => m.id === movie.id)

  return (
    <div
      onClick={() => onSelectMovie(movie)}
      className="relative h-[60vh] w-[30vh] rounded-xl overflow-hidden hover:scale-110 duration-300 cursor-pointer flex flex-col justify-between"
    >
      <div
        className="h-[85%] bg-center bg-cover"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}
      >
        <div
          className="absolute top-2 right-2 bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-md"
          onClick={e => {
            e.stopPropagation()
            isInWatchlist ? handleRemoveWatchlist(movie) : handleAddtoWatchlist(movie)
          }}
        >
          {isInWatchlist ? '❌' : '❤️'}
        </div>
      </div>
      <div className="h-[15%] flex items-center justify-center text-center text-white bg-black bg-opacity-90 px-2 text-sm">
        {movie.original_title}
      </div>
    </div>
  )
}

export default MoviesCard
