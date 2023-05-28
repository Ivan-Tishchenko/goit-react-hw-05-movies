import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { actors } from 'functionsAPI';

const Cast = props => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    actors(movieId)
      .then(value => {
        setCast(value.cast);
      })
      .catch(error => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {cast.map(obj => (
        <li key={obj.id}>
          <img
            src={
              obj.profile_path &&
              `https://image.tmdb.org/t/p/w200${obj.profile_path}`
            }
            alt={obj.name}
          />
          <p>{obj.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
