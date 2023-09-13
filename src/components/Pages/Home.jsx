import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../Vars';
import axios from 'axios';
import CarsGallery from 'components/CarsGallery/CarsGallery';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchTrends = async page => {
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

    fetchTrends(1).then(data => {
      setCars(data);
    });
  }, []);

  useEffect(() => {
    console.log(cars);
  }, [cars]);

  return (
    <div>
      <h1 className="p-5 pt-7 text-center text-4xl">Rental Cars</h1>
      <CarsGallery carArray={cars} />
    </div>
  );
};

export default Home;
