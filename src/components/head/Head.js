import {useHistory, Link} from 'react-router-dom'
import Serach from '../search/Serach'
import './head.css'

function Head() {
  const navigate = useHistory()
  return (
    <div>
      <div className="navMain">
        <button
          className="buttonTop"
          type="button"
          onClick={() => navigate.push('/')}
        >
          <h2>MovieDB</h2>
        </button>
        <button type="button">
          <Link
            to="/"
            style={{color: 'black', cursor: 'pointer', textDecoration: 'none'}}
          >
            Popular
          </Link>
        </button>
        <button type="button">
          <Link
            to="/upcoming"
            style={{color: 'black', cursor: 'pointer', textDecoration: 'none'}}
          >
            Upcoming
          </Link>
        </button>
        <button type="button">
          <Link
            to="/top-rated"
            style={{color: 'black', cursor: 'pointer', textDecoration: 'none'}}
          >
            Top Rated
          </Link>
        </button>

        <div className="searchSection">
          <Serach />
        </div>
      </div>
    </div>
  )
}

export default Head
