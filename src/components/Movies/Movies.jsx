import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchOnName } from 'functionsAPI';

const Movies = props => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  const submitForm = event => {
    event.preventDefault();

    setSearchParams(`query=${event.target.children.finder.value}`);

    event.currentTarget.reset();
  };

  useEffect(() => {
    query &&
      fetchOnName(query)
        .then(value => setFilms(value.results))
        .catch(error => console.log(error));
  }, [query]);

  return (
    <section>
      <form action="query" onSubmit={submitForm}>
        <input
          type="text"
          name="finder"
          id="finder"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">search</button>
      </form>
      <ul>
        {films?.map(obj => (
          <li key={obj.id}>
            <Link
              to={`/movies/${obj.id}`}
              state={{ from: `${location.pathname}${location.search}` }}
            >
              {obj.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Movies;
