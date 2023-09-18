import React, { useState, useEffect } from 'react';
import { BASE_URL, LSKEY } from '../Vars';
import axios from 'axios';
import CarsGallery from '../CarsGallery/CarsGallery';
import ModalPage from '../Modal/ModalPage';
import StFav from './Favorites.component';

const Favorites = () => {
  const [cars, setCars] = useState([]);
  const [fav, setFav] = useState(['0']);
  const [isShowModal, setIsShowModal] = useState(false);
  const [detailInfo, setDetailInfo] = useState([]);

  useEffect(() => {
    const parsedFavorites = JSON.parse(localStorage.getItem(LSKEY));
    if (parsedFavorites) {
      setFav([...parsedFavorites]);
    }

    const fetchCars = async () => {
      try {
        const response = await axios.get(`${BASE_URL}cars/`);
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchCars().then(data => {
      setCars(data);
    });
  }, []);

  const handleFavoriteButton = evt => {
    const favID = evt.currentTarget.id;
    const idx = fav.indexOf(favID);

    if (idx < 0) {
      setFav([...fav, favID]);
    } else {
      setFav(fav.filter(el => el !== favID));
    }
  };

  const favoriteCars = cars.filter(car => fav.includes(car.id.toString()));

  useEffect(() => {
    if (fav.length > 1) {
      localStorage.setItem(LSKEY, JSON.stringify(fav));
    }
  }, [fav]);

  const handleLearnButtonClick = evt => {
    const id = evt.currentTarget.id;
    console.log('Clicked!', id);
    setIsShowModal(true);
    setDetailInfo(cars.find(el => el.id.toString() === id.toString()));
  };

  const handleModalClose = evt => {
    setIsShowModal(false);
  };

  return (
    <>
      {isShowModal && (
        <ModalPage carDetail={detailInfo} handleModalClose={handleModalClose} />
      )}
      {favoriteCars.length ? (
        <CarsGallery
          carArray={favoriteCars}
          favArray={fav}
          handleFavorite={handleFavoriteButton}
          handleLearnButton={handleLearnButtonClick}
        />
      ) : (
        <StFav>
          <StFav.H2>Favorite List Is Empty</StFav.H2>
        </StFav>
      )}
    </>
  );
};

export default Favorites;
