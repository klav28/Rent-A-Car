// import CarGalleryItem from 'components/FilmGalleryItem/FilmGalleryItem';
import StContainer from './CarsGallery.components';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import CarGalleryItem from '../CarGalleryItem/CarGalleryItem';

const CarsGallery = ({
  carArray,
  favArray,
  handleFavorite,
  handleLearnButton,
}) => {
  return (
    <Container>
      <StContainer.Ul>
        {carArray.map(car => (
          <li key={car.id}>
            <StContainer.Card>
              <CarGalleryItem
                car={car}
                isFavorite={favArray.includes(car.id.toString())}
                handleSubmit={handleLearnButton}
                handleFavorite={handleFavorite}
              />
            </StContainer.Card>
          </li>
        ))}
      </StContainer.Ul>
    </Container>
  );
};

CarsGallery.propTypes = {
  carArray: PropTypes.array.isRequired,
  favArray: PropTypes.array.isRequired,
  handleFavorite: PropTypes.func,
  handleLearnButton: PropTypes.func,
};

export default CarsGallery;
