import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Header = props => {
  return (
    <header>
      <nav>
        <StyledLink to="/" end>
          home
        </StyledLink>
        <StyledLink to="/movies">movies</StyledLink>
      </nav>
    </header>
  );
};

export default Header;