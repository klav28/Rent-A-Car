import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import { Suspense } from 'react';
import StLayoutItem from './SharedLayout.component.jsx';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <StLayoutItem.Header>
          <StLayoutItem.Logo>RENT-A-CAR</StLayoutItem.Logo>
          <nav>
            <StLayoutItem.Link to="/" end>
              Home
            </StLayoutItem.Link>
            <StLayoutItem.Link to="/catalog">Catalog</StLayoutItem.Link>
            <StLayoutItem.Link to="/favorites">Favorites</StLayoutItem.Link>
          </nav>
        </StLayoutItem.Header>
      </Container>
      <StLayoutItem.Line> </StLayoutItem.Line>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
