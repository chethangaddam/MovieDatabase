import {useState} from 'react'
import {Link} from 'react-router-dom'
import './search.css'

function Serach() {
  const [movieName, setMovieName] = useState('')
  return (
    <div>
      <div className="serachBox">
        <input
          type="text"
          placeholder="search for movie"
          onChange={e => setMovieName(e.target.value)}
        />
        <button type="button">
          <Link
            to={`/search/${movieName}`}
            style={{color: 'white', textDecoration: 'none'}}
          >
            Serach
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Serach
