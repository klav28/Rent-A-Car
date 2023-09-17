import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StContainer = styled.div``;

StContainer.Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  column-gap: 29px;
  row-gap: 50px;
`;

StContainer.Card = styled.div`
  width: 274px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

StContainer.Link = styled(Link)`
  width: 100%;
`;

export default StContainer;
