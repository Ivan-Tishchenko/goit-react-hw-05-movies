import { lazy, Suspense } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
const Header = lazy(() => import('./Header/Header.jsx'));

const Home = lazy(() => import('./Home/Home.jsx'));
const Movies = lazy(() => import('./Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />} />
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
      </Suspense>
    </>
  );
};
