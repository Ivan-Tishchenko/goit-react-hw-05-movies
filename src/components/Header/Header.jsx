import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Header.module.css';

const StyledLink = styled(NavLink)`
  color: gray;

  &.active {
    color: black;
  }
`;

const Header = props => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <StyledLink className={css.navLink} to="/goit-react-hw-05-movies" end>
          home
        </StyledLink>
        <StyledLink className={css.navLink} to="/movies">
          movies
        </StyledLink>
      </nav>
    </header>
  );
};

export default Header;
