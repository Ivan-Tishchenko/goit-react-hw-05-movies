import React from 'react';
import { Routes, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/" end>
            home
          </StyledLink>
          <StyledLink to="/movies">movies</StyledLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<div>home</div>} />
      </Routes>
    </>
  );
};
