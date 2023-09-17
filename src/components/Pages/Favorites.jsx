import React, { useState, useEffect } from 'react';
import { BASE_URL, LSKEY } from '../Vars';
import axios from 'axios';
import CarsGallery from '../CarsGallery/CarsGallery';

const Favorites = () => {
  const [cars, setCars] = useState([]);

  const favorite = JSON.parse(localStorage.getItem(LSKEY));
  console.log(favorite);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${BASE_URL}cars/`);
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchCars().then(data => {
      const favoriteCars = data.filter(car =>
        favorite.includes(car.id.toString())
      );
      setCars(favoriteCars);
    });
  }, []);

  return (
    <div>
      <h1>My Text</h1>
      {cars.length ? <CarsGallery carArray={cars} /> : null}
    </div>
  );
};

export default Favorites;
