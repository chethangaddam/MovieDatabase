import {useEffect, useState} from 'react'

import MovieCard from '../../components/moviecard/MovieCard'
// import './home.css'
import Pagination from '../../components/pagination/Pagination'

function TopRated() {
  const [popularmovies, setPopularMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  // const headers = {
  //   accept: 'application/json',
  //   Authorization:
  //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmUxY2QzNGE2MTJiZDlhMGQ1NjdlOGFkZTUyOGExZCIsInN1YiI6IjY1YjdlYTY2MGZiMTdmMDBjOTMzMDAwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dc7h8-I4nTy9-Ftkse8bjSZdrpFBMdY54j7FH0GUdtI',
  // }

  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${currentPage}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
      },
    }

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setPopularMovies(json.results)
      })
      .catch(err => console.error('error:'))
  }

  useEffect(() => {
    getData()
  }, [currentPage]) // Fetch data when currentPage changes

  const handleShowClick = () => {
    console.log('show Clicked')
  }

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1)
    console.log('next clicked')
    console.log(currentPage)
    // getData()
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  console.log(`popular movie is ${popularmovies}`)
  return (
    <div>
      <div className="homeMain">
        <div className="homeHead">
          <h1>TopRated Movies</h1>
        </div>
        <div className="popularMoviePoster">
          {popularmovies?.map(movie => (
            <MovieCard
              key={movie.id}
              data={movie}
              showClick={handleShowClick}
            />
          ))}
        </div>
        <div>
          <Pagination
            nextClick={handleNextClick}
            prevClick={handlePrevClick}
            currentPages={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default TopRated
