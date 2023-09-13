import styled from 'styled-components';

const StGalleryItem = styled.div`
  height: 100%;
`;

StGalleryItem.Img = styled.img`
  list-style: none;
  display: block;
`;

StGalleryItem.Title = styled.p`
  font-size: 18px;
  color: black;
  font-weight: 700;
  padding: 8px;
`;

StGalleryItem.Details = styled.p`
  font-size: 14px;
  color: tomato;
  padding: 8px;
  padding-top: 0;
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
