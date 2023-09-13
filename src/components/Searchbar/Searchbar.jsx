import StyledSearchbar from './Searchbar.component';
import { BsSearch } from 'react-icons/bs';
import Container from '../Container/Container';

const Searchbar = ({ querystring }) => {
  return (
    <Container>
      <StyledSearchbar>
        <StyledSearchbar.Form>
          <StyledSearchbar.Input
            type="text"
            name="query"
            autoFocus
            placeholder="Search films..."
            defaultValue={querystring}
          />
          <StyledSearchbar.Button type="submit">
            <BsSearch />
          </StyledSearchbar.Button>
        </StyledSearchbar.Form>
      </StyledSearchbar>
    </Container>
  );
};

export default Searchbar;
