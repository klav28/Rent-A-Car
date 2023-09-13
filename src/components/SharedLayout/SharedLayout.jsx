import { NavLink, Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import styled from 'styled-components';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <header className="w-screen rounded-sm bg-white p-3 shadow-lg">
        <Container>
          <nav>
            <StyledLink to="/" className="ml-5 pr-5 text-3xl" end>
              Home
            </StyledLink>
            <StyledLink to="catalog" className="text-3xl">
              Catalog
            </StyledLink>
          </nav>
        </Container>
      </header>
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
    </>
  );
};
