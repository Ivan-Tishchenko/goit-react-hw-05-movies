import { topOfDay } from 'functionsAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  const [topFilms, setTopFilms] = useState([]);

  useEffect(() => {
    topOfDay()
      .then(value => setTopFilms(value.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      <ul>
        {topFilms.map(obj => (
          <li key={obj.id}>
            <Link to={`/movies/${obj.id}`}>
              <p>{obj.original_title ?? obj.original_name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
