import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = ({ handleAddtoWatchlist, handleRemoveWatchlist, watchlist, setSelectedMovie }) => {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: 'da847384c628a85f8fb0f746fdf3f650',
          language: 'en-US',
          page: pageNo,
        }
      })
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err))
  }, [pageNo])

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {movies.map(movie => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            handleAddtoWatchlist={handleAddtoWatchlist}
            handleRemoveWatchlist={handleRemoveWatchlist}
            watchlist={watchlist}
            onSelectMovie={setSelectedMovie}
          />
        ))}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={() => setPageNo(pageNo + 1)}
        handlePrev={() => pageNo > 1 && setPageNo(pageNo - 1)}
      />
    </div>
  )
}

export default Movies
