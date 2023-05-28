import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchOnId } from 'functionsAPI';

const MovieDetails = props => {
  const { movieId } = useParams();
  const [filmData, setFilmData] = useState({});

  useEffect(() => {
    fetchOnId(movieId)
      .then(value => {
        setFilmData(value);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div>
        {filmData.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w400${filmData.backdrop_path}`}
            alt={filmData.name}
          />
        ) : (
          <div width="400px" height="400px">
            not found image
          </div>
        )}
        <div>
          <h1>{filmData.original_title}</h1>
          <p>User score: {Math.ceil(filmData.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{filmData.overview}</p>
          <h2>Geners</h2>
          {filmData.genres?.map(obj => (
            <p key={obj.id}>{obj.name}</p>
          ))}
        </div>
      </div>
      <div>
        <p>Additional infornstion</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      {props.children}
    </section>
  );
};

export default MovieDetails;
