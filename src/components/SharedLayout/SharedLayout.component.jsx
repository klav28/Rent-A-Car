import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StLayoutItem = styled.div``;

StLayoutItem.Header = styled.header`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

StLayoutItem.Logo = styled.p`
  font-weight: 900;
  font-size: 36px;
  font-family: 'Montserrat';
  color: var(--main-active-color);
`;

StLayoutItem.Link = styled(NavLink)`
  color: black;
  font-size: 24px;
  padding-right: 20px;

  &.active {
    color: var(--main-active-color);
  }

  &:hover {
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.75));
  }

  &:last-child {
    padding-right: 0;
  }
`;

StLayoutItem.Line = styled.div`
  width: 100%;
  color: #dddddd;
  border-bottom: 1px solid;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));
`;

export default StLayoutItem;
