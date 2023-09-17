import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Catalog = lazy(() => import('./Pages/Catalog'));
const Favorites = lazy(() => import('./Pages/Favorites'));
const Home = lazy(() => import('./Pages/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
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
