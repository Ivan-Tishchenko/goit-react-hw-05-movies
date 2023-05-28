const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTljYWY1YjZiNzk0ZDRlMDZhYTBlNDcwNTEyZmM1OCIsInN1YiI6IjY0NzFhNmNhOTQwOGVjMDEzZTgwMTEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7V-KaDkXGjw3QR_sCxenQfJfiW4LhZBy_Qg8BbJLdsY',
  },
};

export const topOfDay = async () => {
  const answear = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response)
    .catch(err => console.error(err));

  return answear;
};

export const fetchOnName = async (name, page) => {
  const answear = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name
      .split(' ')
      .join('%20')}&include_adult=false&language=en-US&page=${page}`,
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response)
    .catch(err => console.error(err));
  return answear;
};

export const fetchOnId = async id => {
  const answear = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response)
    .catch(err => console.error(err));
  return answear;
};

export const actors = async id => {
  const answear = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response)
    .catch(err => console.error(err));

  return answear;
};

export const reviews = async id => {
  const answear = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => response)
    .catch(err => console.error(err));
  return answear;
};
