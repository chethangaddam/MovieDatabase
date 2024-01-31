import './moviecard.css'
import {Link} from 'react-router-dom'

function MovieCard({data}) {
  return (
    <div className="moviecardmain">
      <div className="cardposter">
        <img
          src={`http://image.tmdb.org/t/p/w185${data.poster_path}`}
          alt={data.title}
        />
      </div>
      <div className="rating">
        <h3>{data.title}</h3>
        <p>{data.vote_average} / 10</p>
      </div>
      <div className="showmore">
        <button type="button">
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
  )
}

export default MovieCard
