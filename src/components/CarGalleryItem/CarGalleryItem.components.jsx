import styled from 'styled-components';

const StGalleryItem = styled.div`
  width: 274px;
  height: 426px;
  position: relative;
`;

StGalleryItem.Img = styled.img`
  list-style: none;
  display: block;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

StGalleryItem.Title = styled.div`
  padding-top: 14px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

StGalleryItem.Name = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

StGalleryItem.Model = styled.span`
  color: var(--main-active-color);
`;

StGalleryItem.Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  opacity: 0.5;
  padding-top: 8px;
  padding-bottom: 28px;
`;

StGalleryItem.Li = styled.li`
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

StGalleryItem.Button = styled.button`
  width: 100%;
  font-size: 14px;
  color: var(--light-color);
  background-color: var(--main-active-color);
  border-radius: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-active-color);
  }
`;

StGalleryItem.Fav = styled.div`
  position: absolute;
  z-index: 1;
  right: 14px;
  top: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

StGalleryItem.Vote = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a82d00;
  border-radius: 50%;
  color: white;
  font-size: 14px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.75));
`;
export default StGalleryItem;
