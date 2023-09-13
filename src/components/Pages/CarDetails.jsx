import { useState, useEffect, Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import axios from 'axios';
import Container from '../Container/Container';
import MovieInfoDetails from '../CarInfoDetails/CarInfoDetails';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { BASE_URL } from '../Vars';
import CButton from 'components/Button/CButton';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const MovieInfo = () => {
  const { movieId } = useParams();

  const [CarInfo, setCarInfo] = useState([]);
  const location = useLocation();
  console.log('Location:', location);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchCar = async page => {
      try {
        return await axios.get(`${BASE_URL}movie/${movieId}`, {
          params: {
            append_to_response: 'images',
            //            language: 'uk',
          },
        });
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchCar(movieId).then(result => {
      console.log('Movie Info -> ', result.data);
      setCarInfo(result.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Link
        className="inline-flex items-center gap-2 p-5 text-2xl font-thin"
        to={backLinkHref}
      >
        <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>Back to movies
      </Link>
      {CarInfo.id && <MovieInfoDetails movie={CarInfo} />}
      <div className="mt-4 flex gap-3">
        <Link
          state={{ from: backLinkHref }}
          to={`/movies/${movieId}/cast`}
          className="w-full"
        >
          <CButton bgcolor={'bg-amber-200'}>Cast</CButton>
        </Link>

        <Link
          state={{ from: backLinkHref }}
          to={`/movies/${movieId}/reviews`}
          className="w-full"
        >
          <CButton bgcolor={'bg-teal-200'}>Reviews</CButton>
        </Link>
      </div>
      <Suspense
        fallback={
          <Container>
            <div className="mx-auto h-full w-full">
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2">
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="96"
                  visible={true}
                />
              </div>
            </div>
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieInfo;
