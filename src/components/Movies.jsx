import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = ({handleAddtoWatchlist,handleRemoveWatchlist,watchlist}) => {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1)
    }
  }

  const handleNext = () => {
    setPageNo(pageNo + 1)
  }

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=da847384c628a85f8fb0f746fdf3f650&language=en-US&page=${pageNo}`)
      .then(function (res) {
        setMovies(res.data.results)
      })
      .catch(err => console.error(err))
  }, [pageNo])

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
      {movies.map((movie) => (
  <MoviesCard
    movie={movie}
    key={movie.id}
    handleAddtoWatchlist={handleAddtoWatchlist}
    handleRemoveWatchlist={handleRemoveWatchlist}
    watchlist={watchlist}
  />
))}

      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  )
}

export default Movies
