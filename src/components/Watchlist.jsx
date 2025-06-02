
import React, { useState } from 'react'

const Watchlist = ({ watchlist, handleRemoveWatchlist, genreMap }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')

  const filteredMovies = watchlist.filter(movie => {
    const matchesSearch = movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
    const genreNames = movie.genre_ids.map(id => genreMap[id]).filter(Boolean)
    const matchesGenre = selectedGenre === '' || genreNames.includes(selectedGenre)
    return matchesSearch && matchesGenre
  })

  return (
    <>
      <div className='text-center text-2xl font-bold my-4'>My Watchlist</div>

      <div className='flex justify-center flex-wrap gap-4 my-4'>
        <input
          type='text'
          className='text-black h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 rounded'
          placeholder='Search Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className='text-white bg-blue-600 px-4 rounded h-[3rem]'
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value=''>All Genres</option>
          {Object.entries(genreMap).map(([id, name]) => (
            <option key={id} value={name}>{name}</option>
          ))}
        </select>
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Poster</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genres</th>
            
              
            </tr>
          </thead>
          <tbody>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <tr key={movie.id}>
                  <td className='border-b-2'>
                    <img
                      className='h-[6rem] w-[4rem] p-1 mx-auto'
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </td>
                  <td>{movie.original_title}</td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>Action</td>
                  <td>
                    {movie.genre_ids
                      .map(id => genreMap[id])
                      .filter(Boolean)
                      .join(', ')}
                  </td>
                  <td
                    className='text-red-600 font-bold cursor-pointer'
                    onClick={() => handleRemoveWatchlist(movie)}
                  >
                    Delete
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='6' className='py-4'>
                  No movies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist
