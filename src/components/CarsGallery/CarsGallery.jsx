// import CarGalleryItem from 'components/FilmGalleryItem/FilmGalleryItem';
import StContainer from './CarsGallery.components';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import CarGalleryItem from '../CarGalleryItem/CarGalleryItem';
import { useState, useEffect } from 'react';
import { LSKEY } from '../Vars';

const CarsGallery = ({ carArray }) => {
  // const [favorite, setFavorite] = useState(null);

  const handleLearnButtonClick = evt => {
    console.log('Clicked!', evt.currentTarget.id);
  };

  //CDM
  // useEffect(() => {
  //   const parsedFavorites = JSON.parse(localStorage.getItem(LSKEY));
  //   if (parsedFavorites) {
  //     setFavorite([...parsedFavorites]);
  //   }
  // }, []);

  // CDU
  // useEffect(() => {
  //   if (favorite !== null) {
  //     localStorage.setItem(LSKEY, JSON.stringify(favorite));
  //   }
  // }, [favorite]);

  const handleFavoriteButton = evt => {
    const favoriteID = evt.currentTarget.id;
    console.log('Favorited', favoriteID);

    // const idx = favorite.indexOf(favoriteID);

    // //    console.log('IDX ', idx);

    // if (idx < 0) {
    //   setFavorite([...favorite, favoriteID]);
    //   //      console.log('ADDED:', favoriteID);
    // } else {
    //   setFavorite(favorite.filter(el => el !== favoriteID));
    //   //      console.log('REMOVED:', favoriteID);
    // }
  };

  return (
    <Container>
      <StContainer.Ul>
        {carArray.map(car => (
          <li key={car.id}>
            <StContainer.Card>
              <CarGalleryItem
                car={car}
                isFavorite={false}
                handleSubmit={handleLearnButtonClick}
                handleFavorite={handleFavoriteButton}
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
};

export default CarsGallery;
