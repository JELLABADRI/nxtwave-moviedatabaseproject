import {Link, withRouter} from 'react-router-dom'

import SearchMoviesContext from '../../context/SearchMoviesContext'

import './index.css'

const NavBar = props => {
  const renderSearchBar = () => (
    <SearchMoviesContext.Consumer>
      {value => {
        const {onTriggerSearchingQuery, onChangeSearchInput, searchInput} =
          value

        const onChangeHandler = event => onChangeSearchInput(event.target.value)

        const onSearchHandler = event => {
          event.preventDefault()
          const {history} = props
          onTriggerSearchingQuery()
          history.push(`/search`)
        }

        return (
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="me-2 search-input"
              onChange={onChangeHandler}
              value={searchInput}
              placeholder="Search"
            />
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={onSearchHandler}
            >
              Search
            </button>
          </div>
        )
      }}
    </SearchMoviesContext.Consumer>
  )

  return (
    <nav className="d-flex flex-row align-items-center p-3">
      <div className="logo-container">
        <h1>movieDB</h1>
      </div>
      <div className="ms-auto d-flex align-items-center">
        <ul className="order-1 d-flex flex-row align-items-center p-0 mb-0 ms-3">
          <li>
            <Link to="/">Popular</Link>
          </li>
          <li>
            <Link to="/top-rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul>
        {renderSearchBar()}
      </div>
    </nav>
  )
}

export default withRouter(NavBar)