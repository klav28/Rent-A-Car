// import CarGalleryItem from 'components/FilmGalleryItem/FilmGalleryItem';
import StContainer from './CarsGallery.components';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const CarsGallery = ({ carArray }) => {
  const location = useLocation();
  console.log('location gallary', location);

  return (
    <Container>
      <StContainer.Ul>
        {carArray.map(car => (
          <li key={car.id}>
            <StContainer.Card>
              <StContainer.Link
                state={{ from: location.pathname + location.search }}
                to={`/catalog/${car.id}`}
              >
                <h3>{car.model}</h3>
              </StContainer.Link>
            </StContainer.Card>
          </li>
        ))}
      </StContainer.Ul>
    </Container>
  );
};

CarsGallery.propTypes = {
  carArray: PropTypes.array.isRequired,
};

export default CarsGallery;
