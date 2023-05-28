import { reviews } from 'functionsAPI';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Reviews = props => {
  const [dataReviews, setDataReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    reviews(movieId)
      .then(value => setDataReviews(value.results))
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {dataReviews.length ? (
        dataReviews.map(obj => (
          <li key={obj.id}>
            <h3>Author: {obj.author}</h3>
            <p>{obj.content}</p>
          </li>
        ))
      ) : (
        <p>"We don't have any reviews for this movie",</p>
      )}
    </ul>
  );
};

export default Reviews;
