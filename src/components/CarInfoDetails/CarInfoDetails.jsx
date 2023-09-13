import StMovieDetails from './CarInfoDetails.component';
import { IMAGE_BASE_URL, noPosterUrl } from '../Vars';
import PropTypes from 'prop-types';

const MovieInfoDetails = ({ movie }) => {
  const genreslist = movie.genres.map(el => el.name).join(', ');
  const year = movie.release_date.slice(0, 4);

  return (
    <StMovieDetails>
      <StMovieDetails.Poster
        src={
          movie.poster_path
            ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`
            : `${noPosterUrl}`
        }
        alt={movie.title}
      />
      <StMovieDetails.Info>
        <h2 className="p-5 text-3xl font-bold">
          {movie.title} <span className="font-thin">({year})</span>
        </h2>
        <p className="px-5 text-lg text-teal-800">{genreslist}</p>
        <p className="p-2 px-5 text-sm font-bold text-gray-600">
          Release Date: {movie.release_date}{' '}
          <span className="font-thin"> | </span>Rating: {movie.vote_average}
          <span className="font-thin"> | </span>Duration:{' '}
          {Math.round(movie.runtime / 60)} h {Math.round(movie.runtime % 60)} m
        </p>
        {movie.tagline && (
          <p className="px-5 pt-4 text-2xl italic text-orange-500 ">
            {movie.tagline}
          </p>
        )}
        <p className="p-5">{movie.overview}</p>
      </StMovieDetails.Info>
    </StMovieDetails>
  );
};

MovieInfoDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfoDetails;
