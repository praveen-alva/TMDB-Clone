import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import Banner from './components/Banner'

function App() {
  const [watchlist, setWatchList] = useState([])
  const [genreMap, setGenreMap] = useState({})
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: 'YOUR_API_KEY',
        language: 'en-US',
      }
    })
      .then(res => {
        const map = {}
        res.data.genres.forEach(genre => {
          map[genre.id] = genre.name
        })
        setGenreMap(map)
      })
      .catch(err => console.error(err))
  }, [])

  const handleAddtoWatchlist = (movie) => {
    if (!watchlist.some(m => m.id === movie.id)) {
      setWatchList([...watchlist, movie])
    }
  }

  const handleRemoveWatchlist = (movie) => {
    setWatchList(watchlist.filter(m => m.id !== movie.id))
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner movie={selectedMovie} />
              <Movies
                watchlist={watchlist}
                handleAddtoWatchlist={handleAddtoWatchlist}
                handleRemoveWatchlist={handleRemoveWatchlist}
                setSelectedMovie={setSelectedMovie}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              handleRemoveWatchlist={handleRemoveWatchlist}
              genreMap={genreMap}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
