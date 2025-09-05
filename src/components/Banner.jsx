import React from 'react'

const Banner = ({ movie }) => {
  const imageUrl = movie
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`
    : 'https://www.teahub.io/photos/full/179-1792853_3-movie.jpg'

  const title = movie ? movie.original_title : '3 Movie'

  return (
    <div className="w-full">
      <div
        className="h-[20vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center w-full bg-gray-900 p-4">
        {title}
      </div>
    </div>
  )
}

export default Banner
