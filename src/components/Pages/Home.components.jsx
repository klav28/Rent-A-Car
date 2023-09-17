import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StHome = styled.div``;

StHome.H1 = styled.h1`
  font-size: 36px;
  font-weight: 300;
  opacity: 0.5;
  text-align: center;
`;

StHome.Text = styled.p`
  padding-bottom: 12px;
  line-height: 140%;
`;

StHome.Ul = styled.ul`
  padding-left: 20px;
  padding-bottom: 12px;
`;

StHome.Ol = styled.ol`
  list-style-type: decimal-leading-zero;
  padding-left: 36px;
  padding-bottom: 12px;
`;

StHome.Li = styled.li`
  padding-bottom: 6px;
`;

StHome.Accent = styled.span`
  font-weight: 600;
`;

StHome.Button = styled(Link)`
  display: block;
  width: 274px;
  margin: 0 auto;
  text-align: center;
  background: var(--main-active-color);
  color: var(--light-color);
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-active-color);
  }
`;

export default StHome;
