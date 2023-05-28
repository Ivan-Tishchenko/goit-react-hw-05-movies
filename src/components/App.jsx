import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import Movies from './Movies/Movies.jsx';
import MovieDetails from './MovieDetails/MovieDetails.jsx';
import Cast from './Cast/Cast.jsx';
import Reviews from './Reviews/Reviews.jsx';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route
          path="/movies/:movieId/cast"
          element={
            <MovieDetails>
              <Cast />
            </MovieDetails>
          }
        />
        <Route
          path="/movies/:movieId/reviews"
          element={
            <MovieDetails>
              <Reviews />
            </MovieDetails>
          }
        />
      </Routes>
    </>
  );
};
