import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StModal = styled.div``;

StModal.Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(18, 20, 23, 0.5);
`;

StModal.Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  column-gap: 29px;
  row-gap: 50px;
`;

StModal.Card = styled.div`
  width: 541px;
  height: 752px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 24px;
  padding: 40px;
`;

StModal.Img = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

StModal.CarInfo = styled.div`
  width: 461px;
  margin-top: 14px;
`;

StModal.Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 8px;
`;

StModal.Model = styled.span`
  color: var(--main-active-color);
`;

StModal.Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 4px;
  opacity: 0.5;
  padding: 0;
`;

StModal.Li = styled.li`
  &:after {
    content: ' ';
    margin-left: 6px;
    margin-right: 6px;
    border-left: 1px solid rgba(18, 20, 23, 0.1);
    height: 16px;
  }

  &:last-child:after {
    content: '';
    margin: 0;
    border: 0;
  }
`;

StModal.Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

StModal.Subheader = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

StModal.Condition = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

StModal.ConditionEl = styled.div`
  padding: 14px 7px;
  margin-right: 8px;
`;

StModal.ConditionElP = styled.p`
  font-size: 12px;
  font-family: Montserrat;
  line-height: 18px;
`;
StModal.ConditionElAcc = styled.span`
  color: var(--main-active-color);
`;

StModal.CloseButton = styled.button`
  position: absolute;
  background-color: transparent;  
  right: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

StModal.Button = styled(Link)`
  display: block;
  width: 168px;
  font-size: 14px;
  color: var(--light-color);
  text-align: center;
  background-color: var(--main-active-color);
  color: var(--light-color);
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-active-color);
  }
`;
export default StModal;
