import React, { useEffect } from 'react';
import CarsGallery from '../CarsGallery/CarsGallery';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../store/operations';
import { getCars, getError, getIsLoading } from '../../store/selectors';

const Catalog = () => {
  // const [cars, setCars] = useState([]);

  const dispatch = useDispatch();

  const cars = useSelector(getCars);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading Catalog...</b>}
      {error && <b>{error}</b>}
      {cars.length > 0 && <CarsGallery carArray={cars} />}
    </>
  );
};

export default Catalog;
