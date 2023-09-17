import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../Vars';
import axios from 'axios';
import CarsGallery from '../CarsGallery/CarsGallery';

const Catalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
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

  // useEffect(() => {
  //   console.log(cars);
  // }, [cars]);

  return <CarsGallery carArray={cars} />;
};

export default Catalog;
