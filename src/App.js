import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import Home from './pages/home/Home'
import Head from './components/head/Head'
import Upcoming from './pages/upcoming/Upcoming'
import TopRated from './pages/top-rated/TopRated'
import Details from './pages/details/Details'
import SearchedPage from './components/search/SearchedPage'

const App = () => (
  <Router>
    <Head />
    <Route path="/" exact render={() => <Home />} />
    <Route path="/upcoming" render={() => <Upcoming />} />
    <Route path="/top-rated" render={() => <TopRated />} />
    <Route path="/details/:movieID" render={() => <Details />} />
    <Route path="/search/:movieName" render={() => <SearchedPage />} />

    {/* </div> */}
  </Router>
)

export default App
