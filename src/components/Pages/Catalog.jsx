import React, { useState, useEffect } from 'react';
import { BASE_URL, LSKEY } from '../Vars';
import axios from 'axios';
import CarsGallery from '../CarsGallery/CarsGallery';
import ModalPage from '../Modal/ModalPage';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [fav, setFav] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [detailInfo, setDetailInfo] = useState([]);

  useEffect(() => {
    const parsedFavorites = JSON.parse(localStorage.getItem(LSKEY));
    if (parsedFavorites) {
      setFav([...parsedFavorites]);
    }

    const fetchCars = async page => {
      try {
        const response = await axios.get(`${BASE_URL}cars/`, {
          searchParams: {
            page: page,
            limit: 8,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchCars(1).then(data => {
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

  useEffect(() => {
    if (fav !== null) {
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
      {fav !== null ? (
        <CarsGallery
          carArray={cars}
          favArray={fav}
          handleFavorite={handleFavoriteButton}
          handleLearnButton={handleLearnButtonClick}
        />
      ) : null}
    </>
  );
};

export default Catalog;
