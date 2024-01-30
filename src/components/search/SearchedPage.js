import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import MovieCard from '../moviecard/MovieCard'
// import './home.css'
import Pagination from '../pagination/Pagination'

function SearchedPage() {
  const [popularmovies, setPopularMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const {movieName} = useParams()

  const getData = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}`
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
      .catch(err => console.error('error:', err))
  }

  useEffect(() => {
    getData()
  }, [currentPage]) // Fetch data when currentPage changes

  const handleShowClick = () => {
    console.log('show Clicked')
  }

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1)
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
          <h1>Results for {movieName}</h1>
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

export default SearchedPage
