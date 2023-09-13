import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../Container/Container';
import Searchbar from '../Searchbar/Searchbar';
import { BASE_URL } from '../Vars';
import axios from 'axios';
import CarsGallery from 'components/CarsGallery/CarsGallery';

const Movies = () => {
  const [findedCarss, setFindedCarss] = useState([]);
  const [searchParams] = useSearchParams();

  const queryString = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearch = async page => {
      try {
        const response = await axios.get(`${BASE_URL}search/movie`, {
          params: {
            query: queryString,
            page: page,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };

    if (queryString.trim !== '') {
      fetchSearch(1).then(data => {
        setFindedCarss(data.results);
      });
    }
  }, [queryString]);

  return (
    <Container>
      <Searchbar querystring={queryString} />
      {findedCarss.length > 0 && <CarsGallery CarsArray={findedCarss} />}
    </Container>
  );
};

export default Movies;
