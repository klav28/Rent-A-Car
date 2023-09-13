import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Catalog = lazy(() => import('./Pages/Catalog'));
const Home = lazy(() => import('./Pages/Home'));
// const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
// const Cast = lazy(() => import('./Pages/Cast'));
// const Reviews = lazy(() => import('./Pages/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetails />}> */}
          {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
