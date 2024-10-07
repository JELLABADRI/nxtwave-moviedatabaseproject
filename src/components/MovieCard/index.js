import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li>
      <img alt={title} src={posterPath} />
      <div className="d-flex flex-column align-items-center mt-2">
        <h1 className="m-0">{title}</h1>
        <p className="mb-0 ms-1">Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`} className="mt-auto align-self-center">
        <button className="btn btn-outline-success" type="button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
