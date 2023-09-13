import styled from 'styled-components';

const StMovieDetails = styled.div`
  display: flex;
  width: 100%;
  padding-top: 16px;
`;

StMovieDetails.Poster = styled.img`
  width: 300px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

StMovieDetails.Info = styled.div`
  display: block;
`;

StMovieDetails.Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #222222;
`;
export default StMovieDetails;
