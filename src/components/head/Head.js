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
        <Link
          to="/upcoming"
          style={{color: 'black', cursor: 'pointer', textDecoration: 'none'}}
        >
          Upcoming
        </Link>
        <Link
          to="/top-rated"
          style={{color: 'black', cursor: 'pointer', textDecoration: 'none'}}
        >
          Top-rated
        </Link>

        <div className="searchSection">
          <Serach />
        </div>
      </div>
    </div>
  )
}

export default Head
