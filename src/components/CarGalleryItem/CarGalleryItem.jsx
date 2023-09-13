import StGalleryItem from './CarGalleryItem.components';
import PropTypes from 'prop-types';

const FilmGalleryItem = ({ film }) => {
  return (
    <StGalleryItem>
      <StGalleryItem.Img src={`${film.posterUrl}`} alt={film.title} />
      <StGalleryItem.Vote>{film.votes}</StGalleryItem.Vote>
      <StGalleryItem.Title>{film.title}</StGalleryItem.Title>
      <StGalleryItem.Details>{film.details}</StGalleryItem.Details>
    </StGalleryItem>
  );
};

FilmGalleryItem.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmGalleryItem;
