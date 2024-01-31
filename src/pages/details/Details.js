import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './details.css'

function Details() {
  const {movieID} = useParams()
  const [popularmovies, setPopularMovies] = useState([])
  const [castData, setCastData] = useState([])
  const baseUrl = 'http://image.tmdb.org/t/p'

  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieID}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
      },
    }

    try {
      const response = await fetch(url, options)
      const json = await response.json()
      setPopularMovies(json)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const getCast = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieID}/credits`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
      },
    }

    try {
      const response = await fetch(url, options)
      const json = await response.json()
      setCastData(json.cast)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    getData()
    getCast()
  }, [movieID])

  const genres = popularmovies?.genres

  console.log(castData)

  return (
    <div>
      <div className="detailsmain">
        <div className="details">
          <div className="moviedetails">
            <div className="detailsPoster">
              <img
                src={`${baseUrl}/w185/${popularmovies?.poster_path}`}
                alt="Poster"
              />
            </div>
            <div className="moviedata">
              <h2>{popularmovies?.title}</h2>
              <p>{popularmovies?.overview}</p>
              <p style={{fontWeight: 'bold'}}>
                {popularmovies?.runtime} min of runtime
              </p>
              <div className="genere">
                {genres && genres.map(data => <p>{data.name}</p>)}
              </div>
              <p>Rating: {popularmovies?.vote_average} / 10</p>
              <div>
                <p>Release on: {popularmovies?.release_date}</p>
              </div>
            </div>
          </div>
          <div className="cast">
            <h2>Cast Section</h2>
            <div className="castData">
              {castData &&
                castData.map(data => (
                  <div className="castValue">
                    <div className="castImage">
                      <img src={`${baseUrl}/original${data?.profile_path}`} />
                    </div>
                    <small>{data?.name}</small>
                    <small>Character: {data?.character}</small>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
