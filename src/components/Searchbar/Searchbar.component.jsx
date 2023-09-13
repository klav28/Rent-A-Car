import styled from 'styled-components';

const StyledSearchbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px;
  margin: 0 auto;
`;

StyledSearchbar.Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
`;

StyledSearchbar.Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border: 0;
  margin-left: 20px;
  background-color: #ddd;
  border-radius: 3px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

StyledSearchbar.Input = styled.input`
  display: inline-block;
  width: 480px;
  font: inherit;
  font-size: 20px;
  border: 1px solid gray;
  outline: none;
  padding: 8px;
  padding-left: 20px;
  border-radius: 3px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

StyledSearchbar.Header = styled.header`
  width: 100%;
`;

export default StyledSearchbar;
