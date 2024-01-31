import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './home.css' // Add your CSS file if needed
import Pagination from '../../components/pagination/Pagination'

function Home() {
  const [popularmovies, setPopularMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
      },
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const json = await response.json()
        setPopularMovies(json.results)
      } else {
        console.error('Error fetching data:', response.statusText)
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [currentPage]) // Fetch data when currentPage changes

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div>
      <div className="homeMain">
        <div className="homeHead">
          <h1>Popular Movies</h1>
        </div>
        <div className="popularMoviePoster">
          {popularmovies?.map(data => (
            <div className="moviecardmain" key={data.id}>
              <div className="cardposter">
                {data.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                    alt={data.title}
                  />
                )}
                {data.title && <h3>{data.title}</h3>}
                {data.vote_average && <p>{data.vote_average} / 10</p>}
                <div className="showmore">
                  <button
                    type="button"
                    style={{
                      color: 'white',
                      border: 'none',
                      padding: '5px',
                      background: 'var(--blue)',
                      width: '100%',
                      marginTop: '10px',
                    }}
                  >
                    <Link
                      to={`/details/${data.id}`}
                      style={{color: 'white', textDecoration: 'none'}}
                    >
                      {' '}
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
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

export default Home
