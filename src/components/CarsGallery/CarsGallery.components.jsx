import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StContainer = styled.div``;

StContainer.Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

StContainer.Card = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    transform: scale(1.02);
  }
`;

StContainer.Link = styled(Link)`
  width: 100%;
`;

export default StContainer;
